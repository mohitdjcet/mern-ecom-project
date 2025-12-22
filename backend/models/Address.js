import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    fullName: String,
    phone: String,
    adressLine: String,
    city: String,
    state: String,
    pincode: String,
}, {
    timestamps: true
});

export default mongoose.model('Address', addressSchema);