import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import twitter from "../assets/img/twitter.png";

export function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Hier setzen wir die aktivitäten */}
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active nav-bar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#news"
              className={
                activeLink === "news" ? "active nav-bar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("news")}
            >
              News
            </Nav.Link>
            <Nav.Link
              href="#aboutUs"
              className={
                activeLink === "aboutUs" ? "active nav-bar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutUs")}
            >
              About Us!
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://twitter.com/SeaShepherdSSCS">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.facebook.com/SeaShepherdSSCS/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/seashepherdsscs/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <Nav.Link style={{color:'red'}}
                href="#contact"
                className="contactText"
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact Us!
              </Nav.Link>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
