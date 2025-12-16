import Product from "../models/product.js";

// Create a new product
export const createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.json({
            message: 'Product created successfully',
            product,
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get all products
export const getProducts = async (req, res) => {
    try {
        const {search, category} = req.query;

        let filter = {};

        if (search) {
            filter.title = { $regex: search, $options: 'i' }; // Case-insensitive search
        }

        if (category) {
            filter.category = category;
        }

        const products = await Product.find(filter).sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

//Update a product
export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({
            message: 'Product updated successfully',
            updated,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}