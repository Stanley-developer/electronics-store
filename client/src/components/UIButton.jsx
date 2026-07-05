import React from "react";
import "./UIButton.css";

export default function UIButton({ variant = "primary", children, className = "", ...props }) {
  const typeClass = variant === "secondary" ? "brand-button--secondary" : "brand-button--primary";
  return (
    <button {...props} className={`brand-button ${typeClass} ${className}`.trim()}>
      {children}
    </button>
  );
}
