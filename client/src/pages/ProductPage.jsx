import React from "react";
import "./ProductPage.css";
import UIButton from "../components/UIButton";

export default function ProductPage() {
  return (
    <div className="product-page">
      <div className="breadcrumb">
        Home / Products / MacBook Pro
      </div>

      <section className="product-hero">
        <div className="product-gallery">
          <img
            src="https://placehold.co/600x600"
            alt="MacBook Pro"
          />
        </div>

        <div className="product-info">
          <h1>MacBook Pro</h1>

          <p className="rating">
            ★★★★★ 4.9 (128 Reviews)
          </p>

          <h2 className="price">
            ₦2,350,000
          </h2>

          <p className="stock">
            In Stock
          </p>

          <p className="description">
            Supercharged by the M3 chip, MacBook Pro delivers exceptional
            performance, all-day battery life, and a stunning Liquid Retina
            display.
          </p>
          <div className="quantity-section">
  <p>Quantity</p>

  <div className="quantity-selector">
    <button>-</button>

    <span>1</span>

    <button>+</button>
  </div>
</div>
<div className="button-group">
  <UIButton>
    Add to Cart
  </UIButton>

  <UIButton variant="secondary">
    Buy Now
  </UIButton>
</div>
        </div>
      </section>
    </div>
  );
}