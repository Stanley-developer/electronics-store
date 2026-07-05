import React from "react";
import "./UICard.css";

export default function UICard({ eyebrow, title, children, footer, className = "" }) {
  return (
    <section className={`brand-card ${className}`.trim()}>
      {eyebrow && <span className="brand-card__eyebrow">{eyebrow}</span>}
      {title && <h3 className="brand-card__title">{title}</h3>}
      <div className="brand-card__body">{children}</div>
      {footer && <div className="brand-card__footer">{footer}</div>}
    </section>
  );
}
