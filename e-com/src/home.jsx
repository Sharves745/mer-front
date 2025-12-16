import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="home-hero">
        <h2>Welcome</h2>
        <p>To online Shopping!!</p>

        <button
          className="hero-btn"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </section>

      <section className="home-features">
        <div className="feature-box">
          <h4>Responsive Support</h4>
          <p>Customer service 24/7</p>
        </div>

        <div className="feature-box">
          <h4>Secure Payments</h4>
          <p>Trusted & safe checkout</p>
        </div>

        <div className="feature-box">
          <h4>Fast Shipping</h4>
          <p>Quick and reliable delivery</p>
        </div>

        <div className="feature-box">
          <h4>Easy Returns</h4>
          <p>Hassle-free return policy</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
