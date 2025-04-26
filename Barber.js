const mongoose = require('mongoose');

const BarberSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String },
    experience: { type: Number },
    rating: { type: Number, default: 0 },
    servicesOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    priceRange: { type: String },
    // availability: [{ day: String, startTime: String, endTime: String }],
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Barber', BarberSchema);
