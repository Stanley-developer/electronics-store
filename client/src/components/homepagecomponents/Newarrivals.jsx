import "./../../pages/HomePage.css";

import React, { useState } from "react";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "MacBook Air M2",
    price: 1250000,
    rating: 5,
    reviews: 120,
    image: "/images/macbook-air-m2.png",
    alt: "MacBook Air M2 laptop",
    isNew: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy Tab S9 FE",
    price: 540000,
    rating: 5,
    reviews: 98,
    image: "/images/galaxy-tab-s9-fe.png",
    alt: "Samsung Galaxy Tab S9 FE tablet",
    isNew: true,
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    price: 1650000,
    rating: 4.5,
    reviews: 76,
    image: "/images/iphone-15-pro-max.png",
    alt: "iPhone 15 Pro Max smartphone",
    isNew: true,
  },
];

const formatPrice = (price) => `\u20a6${price.toLocaleString("en-US")}`;

function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className="product-card__stars" aria-hidden="true">
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar
          key={`full-${i}`}
          className="product-card__star product-card__star--filled"
        />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt className="product-card__star product-card__star--filled" />
      )}
      {Array.from({ length: emptyStars }, (_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          className="product-card__star product-card__star--empty"
        />
      ))}
    </span>
  );
}

export default function NewArrivals({ onAddToCart }) {
  const [wishlist, setWishlist] = useState(new Set());

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="new-arrivals">
      <header className="new-arrivals__header">
        <h2 className="new-arrivals__title">New Arrivals</h2>
        <a href="#" className="new-arrivals__view-all">
          View All
        </a>
      </header>

      <div className="product-grid">
        {products.map((product) => {
          const isWishlisted = wishlist.has(product.id);

          return (
            <article className="product-card" key={product.id}>
              <div className="product-card__top">
                {product.isNew && (
                  <span className="product-card__badge">New</span>
                )}
                <button
                  type="button"
                  className={`product-card__wishlist${
                    isWishlisted ? " product-card__wishlist--active" : ""
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                  aria-pressed={isWishlisted}
                  aria-label={
                    isWishlisted
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                >
                  <LuHeart fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="product-card__image-wrapper">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-card__image"
                  loading="lazy"
                />
              </div>

              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>

                <div
                  className="product-card__rating"
                  aria-label={`Rated ${product.rating} out of 5 stars, ${product.reviews} reviews`}
                >
                  <RatingStars rating={product.rating} />
                  <span className="product-card__reviews" aria-hidden="true">
                    ({product.reviews})
                  </span>
                </div>

                <p className="product-card__price">
                  {formatPrice(product.price)}
                </p>

                <button
                  type="button"
                  className="product-card__cta"
                  onClick={() => onAddToCart?.(product)}
                >
                  <LuShoppingCart aria-hidden="true" />
                  Add to Cart
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
