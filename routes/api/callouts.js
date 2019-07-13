const express = require('express');
const router = express.Router();

const asyncHandler = require('../../utils/asyncHandler');
const Callout = require('../../models/Callout');

// @route GET api/callouts
// @desc Get All Callouts
// @access Public
router.get(
  '/', 
  asyncHandler(async (req, res) => {
    res.json(await Callout.find());
  })
);

// @route POST api/callouts
// @desc Post a callout
// @access Public
router.post(
  '/', 
  asyncHandler(async (req, res) => {
    const newCallout = new Callout({
      compressor: req.body.compressor,
      area: req.body.area,
      explanation: req.body.explanation,
      operator: req.body.operator,
      alarmDtTm: req.body.alarmDtTm,
      addNotes: req.body.addNotes
    });
  res.json(await newCallout.save());
  })
);

// @route DELETE api/callouts/:id
// @desc Delete a callout
// @access Public
router.delete(
  '/:id', 
  asyncHandler(async (req, res) => {
    let document = await Callout.findById(req.params.id);
    res.json(await document.remove())
  })
);

module.exports = router;