import React from "react";

export default function Header() {
  return (
    <div className={`header`}>
      <img
        id="blackOcean"
        src="./img/header.png"
        width="100%"
        height="40%"
      ></img>
      <img id="logo" src="./img/logo.png" width="12%"></img>
    </div>
  );
}
