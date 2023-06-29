import React from "react";

export default function Input({ service, onSetService, children }) {
  return (
    <div className="input-container">
      {children}
      <select value={service} onChange={(e) => onSetService(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Amazing (20%)</option>
      </select>
    </div>
  );
}
