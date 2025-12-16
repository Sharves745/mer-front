import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/postProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock)
      })
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product added successfully");
        console.log(data);

        navigate("/products");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <br /><br />

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#ff6b4a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
