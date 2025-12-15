import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    stock: "",
  });
  const allowedFields = ["title", "price", "description", "category", "image", "stock"];

  const loadProduct = async () => {
    const res = await api.get("/products");
    const product = res.data.find((p) => p._id === id);
    setForm(product);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/products/update/${id}`, form);
    alert("Product updated!");
    navigate("/admin/products");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>

      <form className="space-y-3" onSubmit={handleSubmit}>
        {allowedFields.map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            className="w-full border px-3 py-2 rounded"
          />
        ))}

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Update Product
        </button>
      </form>
    </div>
  );
}
