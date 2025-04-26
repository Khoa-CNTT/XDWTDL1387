const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    barberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Review', ReviewSchema);