import React from "react";
import "./component.css";

export default function Input(props) {
  const { label, name, id, placeholder, onChange } = props;

  return (
    <div className="input-container">
      <h2 className="input-label">{label}</h2>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        className="input"
        onChange={onChange}
      />
    </div>
  );
}
