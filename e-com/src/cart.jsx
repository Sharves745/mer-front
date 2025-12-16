function Cart({ cartItems, removeFromCart }) {
  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
        marginTop: "40px"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={item.cartItemId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "15px",
                background: "white",
                padding: "14px 20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
              }}
            >
              <div>
                <strong>
                  {typeof item === "string" ? item : item.name}
                </strong>
                <p style={{ margin: 0 }}>
                  ₹{typeof item === "string" ? "—" : item.price}
                </p>
              </div>

              <button
                onClick={() =>
                  removeFromCart(
                    typeof item === "string" ? item : item.cartItemId
                  )
                }
                style={{
                  padding: "6px 14px",
                  border: "none",
                  background: "crimson",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
