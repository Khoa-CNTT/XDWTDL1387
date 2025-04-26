const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    barberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true }],
    appointmentTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'canceled'], default: 'pending' },
    totalPrice: { type: Number, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);