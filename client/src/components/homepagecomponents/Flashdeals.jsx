import React, { useState, useEffect } from "react";
import "./../../pages/HomePage.css";

/**
 * DealsOfTheWeek.jsx
 * -----------------------------------------------------------------------
 * Promo banner: live countdown, 3 deal cards, and a 4-item trust strip.
 * Uses the same orange/cream tokens as Hero.jsx so the two sit together
 * consistently on one page.
 *
 *   import DealsOfTheWeek from './DealsOfTheWeek';
 *   <DealsOfTheWeek />
 *
 * Swap PRODUCTS' images for real photography by replacing <ProductArt />
 * with an <img> — everything else (price formatting, layout, countdown)
 * keeps working as-is.
 * -----------------------------------------------------------------------
 */

/* Countdown target: 2 days, 14 hours, 25 minutes, 30 seconds from load */

// Product list - each one has a name, price info and a color
// (the color is just used for the image placeholder box)
const products = [
  {
    name: "HP Pavilion 15",
    price: "₦420,000",
    oldPrice: "₦560,000",
    discount: "25% OFF",
    color: "#4A6FE3",
  },
  {
    name: "Lenovo Tab M10 Plus",
    price: "₦260,000",
    oldPrice: "₦340,000",
    discount: "24% OFF",
    color: "#8B5CF6",
  },
  {
    name: "Samsung Galaxy S23",
    price: "₦760,000",
    oldPrice: "₦950,000",
    discount: "20% OFF",
    color: "#333333",
  },
];

// The 4 trust badges at the bottom
const trustItems = [
  { icon: "🚚", title: "Free Delivery", text: "On orders over ₦100,000" },
  { icon: "🛡️", title: "Secure Payment", text: "100% secure payment" },
  { icon: "↩️", title: "7 Days Returns", text: "Money back guarantee" },
  { icon: "🎧", title: "24/7 Support", text: "We're here to help" },
];

export default function Flashdeals() {
  // The countdown starts at 2 days, 14 hours, 25 minutes, 30 seconds
  const [time, setTime] = useState({
    days: 2,
    hours: 14,
    minutes: 25,
    seconds: 30,
  });

  // Every second, count down by 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds = seconds - 1;
        } else if (minutes > 0) {
          minutes = minutes - 1;
          seconds = 59;
        } else if (hours > 0) {
          hours = hours - 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days = days - 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Adds a leading zero for single digit numbers (5 -> "05")
  function addZero(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  return (
    <section className="deals">
      <div className="deals-banner">
        <div className="deals-header">
          <div className="deals-title">
            <span className="bolt-icon">⚡</span>
            <h2>Deals of the Week</h2>
          </div>

          <div className="deals-header-right">
            <div className="countdown">
              <div className="countdown-box">
                <span className="countdown-number">{addZero(time.days)}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-number">{addZero(time.hours)}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-number">
                  {addZero(time.minutes)}
                </span>
                <span className="countdown-label">Mins</span>
              </div>
              <div className="countdown-box">
                <span className="countdown-number">
                  {addZero(time.seconds)}
                </span>
                <span className="countdown-label">Secs</span>
              </div>
            </div>

            <button className="view-all-button">View All Deals</button>
          </div>
        </div>

        <div className="products">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div
                className="product-image"
                style={{ backgroundColor: product.color }}
              ></div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-row">
                  <span className="new-price">{product.price}</span>
                  <span className="old-price">{product.oldPrice}</span>
                </div>
                <span className="discount-tag">{product.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="trust-strip">
        {trustItems.map((item, index) => (
          <div className="trust-item" key={index}>
            <span className="trust-icon">{item.icon}</span>
            <div className="trust-text">
              <p className="trust-title">{item.title}</p>
              <p className="trust-subtitle">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
