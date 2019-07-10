const express = require('express');
const router = express.Router();

// callout model
const Callout = require('../../models/Callout');

// @route GET api/callouts
// @desc Get All Callouts
// @access Public
router.get('/', (req, res) => {
  Callout.find()
    .sort({ date: -1 })
    .then(callouts => res.json(callouts))
});

// @route POST api/callouts
// @desc Post a callout
// @access Public
router.post('/', (req, res) => {
  const newCallout = new Callout({
    compressor: req.body.compressor,
    explanation: req.body.explanation,
    operator: req.body.operator,
    alarmDtTm: req.body.alarmDtTm,
    addNotes: req.body.addNotes
  });
  newCallout.save()
    .then(callout => res.json(callout));
});

// @route DELETE api/callouts/:id
// @desc Delete a callout
// @access Public
router.delete('/:id', (req, res) => {
  Callout.findById(req.params.id)
    .then(callout => callout.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;