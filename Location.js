const mongoose = require('mongoose');
const LocationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Location', LocationSchema);