import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import twitter from "../assets/img/twitter.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ marginBottom: +5 }}>
              <a href="https://twitter.com/SeaShepherdSSCS">
                <img src={twitter} />
              </a>
              <a href="https://www.facebook.com/SeaShepherdSSCS/">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/seashepherdsscs/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>Sea Shepheard</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
