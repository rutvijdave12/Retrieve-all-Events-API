const Event = require('../models/events');

// Retrieve all events
exports.getAllEvents = async () => {
  try {
    return await Event.find();
  } catch (error) {
    throw error;
  }
};
