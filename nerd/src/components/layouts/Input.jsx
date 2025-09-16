import React from "react";

export function Input_pra_login({id_name, type, placeholder, value, onChange, classe }) {
  return (
    <input
      className={classe}
      id={id_name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
