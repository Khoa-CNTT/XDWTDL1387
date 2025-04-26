const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String },
    paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
    transactionId: { type: String },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Payment', PaymentSchema);