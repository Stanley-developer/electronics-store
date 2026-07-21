import "./../../pages/HomePage.css";
import homeImg from "./../../assets/frontimagetechnova-removebg-preview.png";
// import button from "./../components/UIButton";
import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hero.jsx
 * -----------------------------------------------------------------------
 * Responsive hero carousel with 4 slides, autoplay, chevron navigation,
 * dot indicators, swipe support and keyboard navigation.
 *
 * Drop this file + Hero.css into any React app:
 *   import Hero from './Hero';
 *   <Hero />
 *
 * Replace the <ImagePlaceholder /> blocks inside SLIDES' device markup
 * with real <img> / <picture> elements when product photography is ready.
 * -----------------------------------------------------------------------
 */

const AUTOPLAY_DELAY = 6000; // ms between automatic slide changes
const SWIPE_THRESHOLD = 50; // px finger movement required to trigger a swipe

const SLIDES = [
  {
    id: "all-devices",
    headingTop: "Tech that moves",
    headingAccent: "with you",
    description: "Premium laptops, tablets and phones at the best prices.",
    ctaLabel: "Shop Now",
    visual: "cluster",
  },
  {
    id: "laptops",
    headingTop: "Power up your",
    headingAccent: "workflow",
    description:
      "Next-gen laptops engineered for speed, battery life and everyday performance.",
    ctaLabel: "Shop Laptops",
    visual: "laptop",
  },
  {
    id: "phones",
    headingTop: "Capture every",
    headingAccent: "moment",
    description:
      "Pro-level cameras and all-day battery in a phone that keeps up with you.",
    ctaLabel: "Shop Phones",
    visual: "phone",
  },
  {
    id: "tablets",
    headingTop: "Work and play,",
    headingAccent: "anywhere",
    description:
      "Lightweight tablets built for sketching, streaming and everything in between.",
    ctaLabel: "Shop Tablets",
    visual: "tablet",
  },
];

/* ----------------------------- Icons ---------------------------------- */

function ChevronIcon({ direction = "right" }) {
  return (
    <svg
      className={`hero__nav-icon${direction === "left" ? " hero__nav-icon--left" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg
      className="device__icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M21 15.5l-5.5-5-5 4.5-2.5-2.5-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------ Device placeholders --------------------------
   Pure-CSS shapes standing in for real product photography. Swap the
   contents of device__screen / device__body for an <img> when ready.   */

function LaptopPlaceholder({ className = "", label = "Laptop image" }) {
  return (
    <div className={`device device--laptop ${className}`}>
      <div className="device__screen">
        <ImagePlaceholderIcon />
        <span className="device__label">{label}</span>
      </div>
      <div className="device__base" aria-hidden="true" />
    </div>
  );
}

function TabletPlaceholder({ className = "", label = "Tablet image" }) {
  return (
    <div className={`device device--tablet ${className}`}>
      <span className="device__camera" aria-hidden="true" />
      <ImagePlaceholderIcon />
      <span className="device__label">{label}</span>
    </div>
  );
}

function PhonePlaceholder({ className = "", label = "Phone image" }) {
  return (
    <div className={`device device--phone ${className}`}>
      <span
        className="device__camera device__camera--phone"
        aria-hidden="true"
      />
      <ImagePlaceholderIcon />
      <span className="device__label">{label}</span>
    </div>
  );
}

function HeroVisual({ type }) {
  return (
    <div className="hero__visual">
      <div className="hero__blob" aria-hidden="true" />
      {type === "cluster" && (
        <div className="hero__devices hero__devices--cluster">
          <LaptopPlaceholder className="device--pos-laptop" />
          <TabletPlaceholder className="device--pos-tablet" />
          <PhonePlaceholder className="device--pos-phone" />
        </div>
      )}
      {type === "laptop" && (
        <div className="hero__devices hero__devices--single">
          <LaptopPlaceholder className="device--hero" />
        </div>
      )}
      {type === "tablet" && (
        <div className="hero__devices hero__devices--single">
          <TabletPlaceholder className="device--hero" />
        </div>
      )}
      {type === "phone" && (
        <div className="hero__devices hero__devices--duo">
          <PhonePlaceholder
            className="device--pos-phone-a"
            label="Phone image"
          />
          <PhonePlaceholder
            className="device--pos-phone-b"
            label="Phone image"
          />
        </div>
      )}
    </div>
  );
}

/* -------------------------------- Hero ---------------------------------- */

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = SLIDES.length;
  const slideWidthPercent = 100 / total;

  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const autoplayRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      prefersReducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    }
  }, []);

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return undefined;
    autoplayRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);
    return () => clearTimeout(autoplayRef.current);
  }, [current, isPaused, total]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  };

  // Touch / swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured products"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <span className="hero__tab" aria-hidden="true" />

      <div
        className="hero__viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="hero__track"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${current * slideWidthPercent}%)`,
          }}
        >
          {SLIDES.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                className="hero__slide"
                key={slide.id}
                style={{ width: `${slideWidthPercent}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                aria-hidden={!isActive}
              >
                <div className="hero__content">
                  <h1 className="hero__heading">
                    {slide.headingTop}
                    <br />
                    <span className="hero__heading-accent">
                      {slide.headingAccent}
                    </span>
                  </h1>
                  <p className="hero__description">{slide.description}</p>
                  <button
                    className="hero__cta"
                    type="button"
                    tabIndex={isActive ? 0 : -1}
                  >
                    <span>{slide.ctaLabel}</span>
                    <span className="hero__cta-icon">
                      <ChevronIcon direction="right" />
                    </span>
                  </button>
                </div>

                <HeroVisual type={slide.visual} />
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="hero__nav hero__nav--prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        className="hero__nav hero__nav--next"
        onClick={goNext}
        aria-label="Next slide"
      >
        <ChevronIcon direction="right" />
      </button>

      <div className="hero__dots" role="tablist" aria-label="Select slide">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            className={`hero__dot${index === current ? " hero__dot--active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === current}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <span className="hero__sr-only" aria-live="polite">
        Slide {current + 1} of {total}: {SLIDES[current].headingTop}{" "}
        {SLIDES[current].headingAccent}
      </span>
    </section>
  );
}
