import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <span className="logo">MyShop</span>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default NavBar;
