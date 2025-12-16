function ProductDetails({ product, addToCart }) {
  if (!product) {
    return <h3>No product selected</h3>;
  }

  function handleAddToCart() {
    addToCart({
      cartItemId: Date.now(),
      name: product.name,
      price: product.price
    });

    alert("Item added to cart");
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>{product.name}</h2>

      <img
        src={product.image || "123.jpg"}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          marginBottom: "15px"
        }}
      />

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {product.description || "No description available"}
      </p>

      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
