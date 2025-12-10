import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0,
    }
},{
    timestamps: true,
});

export default mongoose.model('Product', productSchema);