const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const asyncHandler = require('../../utils/asyncHandler');
const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  // validation
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
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
              res.json({
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              })
            })
        })
      })

    })
});

module.exports = router;