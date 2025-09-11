import React, { Children } from "react";
import "../../styles/login.module.css"

export function Button_pra_login({children, onClick}) {
  return(
    <button onClick={onClick} className="btn">
      {children}
    </button>
  )
}