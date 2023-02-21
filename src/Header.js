import React from "react";

export default function Header() {
  // const headerStyle = {background-image: url(./img/header.png) width="100%"}
  return (
    <div className={`header`}>
      <img id="logo" src="./img/logo.png" width="12%"></img>
      <button id="aboutButton">About Us</button>
      <button id="contact">Contact Us</button>
      <button id="submit">Join Us</button>
    </div>
  );
}
