import React from "react";
import logo from "./img/logo.png";
import header from "./img/header.png";

export default function Header() {
  // const headerStyle = {background-image: url(./img/header.png) width="100%"}
  return (
    <div className={`header`}>
      <img id="blackOcean" src={header} width="100%"></img>
      <img id="logo" src={logo} width="12%"></img>
      <a id="aboutButton" href="" target="_blank">
        About Us
      </a>
      <a id="contact" href="">
        Contact Us
      </a>
      <a id="submit" href="">
        Join Us
      </a>
    </div>
  );
}
