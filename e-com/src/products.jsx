import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  function fetchProducts() {
    fetch("http://localhost:5000/api/getproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    fetch(`http://localhost:5000/api/deleteProduct/${id}`, {
      method: "DELETE"
    })
      .then(() => fetchProducts())
      .catch((err) => console.error(err));
  }

  return (
    <div className="products-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1100px",
          marginBottom: "20px"
        }}
      >
        <h2 className="products-title">Products</h2>

        {/* ✅ ADD PRODUCT BUTTON */}
        <button
          onClick={() => navigate("/add-product")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff6b4a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          + Add Product
        </button>
      </div>

      {!selectedProduct && (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="card">
              <img
                src={product.image || "123.jpg"}
                alt={product.name}
                className="product-img"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: "pointer" }}
              />

              <h3>{product.name}</h3>
              <p>Starting from ₹{product.price}</p>
              <p style={{ color: "gray" }}>Click to view</p>

              <button
                onClick={() => deleteProduct(product._id)}
                style={{
                  marginTop: "8px",
                  background: "crimson",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div>
          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              marginBottom: "15px",
              padding: "10px 18px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            ← Back to Products
          </button>

          <ProductDetails
            product={selectedProduct}
            addToCart={addToCart}
          />
        </div>
      )}
    </div>
  );
}

export default Products;
