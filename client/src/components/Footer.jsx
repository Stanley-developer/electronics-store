import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img
              src={logo}
              alt="Electronics Store logo"
              className="footer-logo"
            />
          </Link>
          <p>
            Premium laptops, phones, tablets, and accessories with fast delivery
            and dependable support.
          </p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <Link to="/laptops">Laptops</Link>
          <Link to="/phones">Phones</Link>
          <Link to="/tablets">Tablets</Link>
          <Link to="/deals">Deals</Link>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <Link to="/account">My account</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Sign in</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Electronics Store. All rights reserved.</p>
        <p>Secure checkout • Fast shipping • 24/7 support</p>
      </div>
    </footer>
  );
}
