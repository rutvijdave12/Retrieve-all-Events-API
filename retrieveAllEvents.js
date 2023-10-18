const express = require('express');
const Event = require('./models/Event'); // Import the Event model

const router = express.Router();

// Create a GET route to retrieve all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
