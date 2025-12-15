import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function AddProduct() {
    const [form , setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await api.post("/products/add", form);
            alert("Product added successfully!");
            navigate("/admin/products");
        }catch(err){
            console.error("Error adding product:", err);
        }
    }

    return(
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                {
                    Object.keys(form).map((key) => (
                        <input
                            key={key}
                            name = {key}
                            value={form[key]}
                            onChange={handleChange}
                            placeholder={key}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    ))
                }
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Add Product
                </button>
            </form>
        </div>
    )
}