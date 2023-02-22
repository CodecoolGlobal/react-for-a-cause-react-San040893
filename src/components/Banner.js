import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import logo from "../assets/img/logo.png";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const toRotate = [
    "Safe Wildlife",
    "Stop Illegal Fishing",
    "Protect The Ocean",
  ];
  const [text, setText] = useState("");

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} medium={6} xl={7}>
            <span className="tagline">
              Protecting marine wildlife worldwide
            </span>
            <h1>
              {"SeaShepheard"}
              <br></br>
              <span className="wrap">{text} </span>
            </h1>
            <p>
              Sea Shepherd’s sole mission is to protect and conserve the world’s
              oceans and marine wildlife. We work to defend all marine wildlife,
              from whales and dolphins, to sharks and rays, to fish and krill,
              without exception.
            </p>
            <button onClick={() => console.log("connect")}>
              lets Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
