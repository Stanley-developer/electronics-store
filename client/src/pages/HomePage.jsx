import React from "react";
import "./HomePage.css";
import button from "./../components/UIButton";
import homeImg from "./../assets/frontimagetechnova-removebg-preview.png";
import Header from "./../components/Header";
import { useEffect, useState } from "react";

export default function HomePage() {
  // const [time, setTime] = useState({
  //   hours: 10,
  //   minutes: 45,
  //   seconds: 18,
  // });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime((prev) => {
  //       let { hours, minutes, seconds } = prev;

  //       if (seconds > 0) {
  //         seconds--;
  //       } else {
  //         seconds = 59;

  //         if (minutes >= 0) {
  //           minutes--;
  //         } else {
  //           minutes = 59;
  //           if (hours >= 0) {
  //             hours--;
  //           }
  //         }
  //       }
  //     });
  //     return { hours, minutes, seconds };
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <>
      <main className="home">
        <section className="hero">
          <div className="hero-left">
            <div className="hero-text">
              <span className="hero-badge">BEST TECH. BEST PRICES</span>
              <h1>
                Powerful Tech.
                <br />
                Endless <span>possibilities</span>
              </h1>
              <p>
                shop the latest laptops, tablets, and phones at unbeatable
                prices.
              </p>
              <div className="hero-buttons">
                <button className="shop-btn">Shop Now</button>
                <button className="explore-btn"> Explore Deals</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={homeImg} alt="" />
            </div>
          </div>
          <div className="hero-right">
            <div className="flash-header">
              <h2>Flash Deals</h2>
              <button>View All</button>
            </div>
            {/* <div className="countdown">
              <div className="time-box">
                <h3>{String(time.hours).padStart(2, "0")}</h3>
                <span>Hours</span>
              </div>

              <div className="time-box">
                <h3>{String(time.minutes).padStart(2, "0")}</h3>

                <span>Minutes</span>
              </div>
              <div className="time-box">
                <h3>{String(time.seconds).padStart(2, "0")}</h3>
                <span>Seconds</span>
              </div>
            </div> */}
          </div>
          <div className="flash-products"></div>
        </section>
      </main>
    </>
  );
}
