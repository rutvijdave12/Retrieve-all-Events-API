const Event = require('../models/events');
const errors = require('../../errors/errors');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    return res.status(200).json({
      statusCode: 0,
      timestamp: Date.now(),
      requestId: req.body.requestId,
      data: events,
      info: {
        code: errors['000'].code,
        message: errors['000'].message,
        displayText: errors['000'].displayText,
      },
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 1,
      timestamp: Date.now(),
      requestId: req.body.requestId,
      info: {
        code: errors['006'].code,
        message: error.message || errors['006'].message,
        displayText: errors['006'].displayText,
      },
      error: error,
    });
  }
};