const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();

const asyncHandler = require('../../util/asyncHandler');
const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
  const { name, email, password, password2 } = req.body;
  // validation
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  };
  if(password !== password2) {
    return res.status(400).json({ msg: 'Passwords do not match' })
  };
  // check for existing user
  User.findOne({ email })
    .then(user => {
      // if email exists, return 400 error
      if(user) return res.status(400).json({ msg: 'User already exists' });
      const newUser = new User({
        name,
        email,
        password
      });
      // create salt & hash for pass
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
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
      })

    })
});

module.exports = router;