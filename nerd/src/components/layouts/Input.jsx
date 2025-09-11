import React from "react";

export function Input_pra_login({ type, placeholder, value, onChange }) {
  return (
    <input
      className="{input}"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
