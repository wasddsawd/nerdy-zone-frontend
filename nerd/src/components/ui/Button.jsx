import React, { Children } from "react";

export function Button({classe, children, onClick, link}) {
  return(
  <button className={classe} href={link} onClick={onClick}>
    {children}
  </button>
);};

