import React from "react";

export default function BillInput({ text, children }) {
  return (
    <div className="input-container">
      <p>{text}</p> {children}
    </div>
  );
}
