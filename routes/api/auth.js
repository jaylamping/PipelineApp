const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();

const asyncHandler = require('../../utils/asyncHandler');
const User = require('../../models/User');

// @route POST api/auth
// @desc Authenticate user
// @access Public
router.post('/', (req, res) => {
  const { email, password } = req.body;
  // input validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  };
  // check for existing user
  User.findOne({ email })
    .then(user => {
      // if email does not exist, return 400 error
      if(!user) return res.status(400).json({ msg: 'User does not exist' });
      // validate password (plain text user input vs hashed value)
      bcrypt.compare(password, user.password)
        .then(match => {
          if(!match) return res.status(400).json({ msg: 'Invalid credentials' })
          // create token for response
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              // send response
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        })
    })
});

module.exports = router;