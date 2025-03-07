import React, { useContext, useState } from "react";
import "./navbar1.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>Shopper</p>
        </div>

        {/* ✅ Menu Button Below Logo (for mobile screens) */}
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <ul
        className={`nav-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link to="/kid">Kid</Link>
          {menu === "kid" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
