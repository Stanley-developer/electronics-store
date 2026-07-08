import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import { Heart, ShoppingCart, User, Search, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Laptops", to: "/laptops" },
  { name: "Phones", to: "/phones" },
  { name: "Tablets", to: "/tablets" },
  { name: "Deals", to: "/deals" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <Link to="/" className="header-left" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="store logo" className="logo" />
        </Link>

        <div className="header-center">
          <div className="search-wrapper">
            <select className="category-select" aria-label="Categories">
              <option>All Categories</option>
              <option>Laptops</option>
              <option>Phones</option>
              <option>Tablets</option>
            </select>
            <input
              className="search-input"
              placeholder="Search for laptops, tablets, phones..."
              aria-label="Search"
            />
            <button className="search-btn" aria-label="Search Button">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="header-right">
          <Link
            className="icon"
            to="/cart"
            title="Cart"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingCart size={18} />
            <span className="cart-badge">0</span>
            <span className="icon-label">Cart</span>
          </Link>
          <Link
            className="icon"
            to="/login"
            title="Login"
            onClick={() => setMenuOpen(false)}
          >
            <User size={18} />
            <span className="icon-label">Login</span>
          </Link>
          <Link
            className="icon"
            to="/account"
            title="Account"
            onClick={() => setMenuOpen(false)}
          >
            <Heart size={18} />
            <span className="icon-label">Account</span>
          </Link>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        className={`main-nav ${menuOpen ? "open" : ""}`}
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
