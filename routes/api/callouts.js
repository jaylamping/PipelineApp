const express = require('express');
const router = express.Router();
const authHandler = require('../../util/authHandler');

const asyncHandler = require('../../util/asyncHandler');
const Callout = require('../../models/Callout');

// @route GET api/callouts
// @desc Get All Callouts
// @access Private
router.get(
  '/',
  asyncHandler(async (req, res) => {
    res.json(await Callout.find());
  })
);

// @route POST api/callouts
// @desc Post a callout
// @access Private
router.post(
  '/',
  authHandler,
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
// @access Private
router.delete(
  '/:id',
  authHandler,
  asyncHandler(async (req, res) => {
    let doc = await Callout.findById(req.params.id);
    res.json(await doc.remove())
  })
);

module.exports = router;