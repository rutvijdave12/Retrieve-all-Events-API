const express = require('express');
const mongoose = require('mongoose');
const eventController = require('./routes/retrieveAllEvents.controller.js');
const mongoURL = 'mongodb://localhost/dummy-database-name';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to your MongoDB database
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/api/events', async (req, res) => {
  try {
    const events = await eventController.getAllEvents();
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
module.exports.handler = serverless(app);

