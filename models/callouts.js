const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create callout schema 
const calloutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  compressor: {
    type: String,
    required: true
  },
  explanation: {
    type: String
  },
  operator: {
    type: String,
    required: true
  },
  alarmDtTm: {
    type: Date
  },
  contactDtTm: {
    type: Date
  },
  normalDtTm: {
    type: Date
  },
  standbyDtTm: {
    type: Date
  },
  additionalNotes: {
    type: String
  }
});

module.exports = Callout = mongoose.model('callout', calloutSchema);