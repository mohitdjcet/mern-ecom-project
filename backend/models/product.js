import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    category: String,
    image: String,
    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ✅ SAFE MODEL EXPORT (IMPORTANT)
export default mongoose.model("Product", productSchema);
