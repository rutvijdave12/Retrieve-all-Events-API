<<<<<<< HEAD
const { string } = require('joi');
=======
>>>>>>> 3e66358d536d7a5d5be45e91437cb4e2bac63b48
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
<<<<<<< HEAD
    type: String,
=======
    type: Buffer,
>>>>>>> 3e66358d536d7a5d5be45e91437cb4e2bac63b48
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
