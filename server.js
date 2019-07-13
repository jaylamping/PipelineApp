const express = require('express');
const mongoose = require('mongoose');

// initialize express
const app = express();

// body-parser middleware
app.use(express.json());

// assign db config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// use routes
app.use('/api/callouts', require('./routes/api/callouts'));
app.use('/api/users', require('./routes/api/users'));