const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const callouts = require('./routes/api/callouts');

// initialize express
const app = express();

// body-parser middleware
app.use(bodyParser.json());

// assign db config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// use routes
app.use('/api/callouts', callouts);