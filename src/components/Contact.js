import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import turtleImg from "../assets/img/turtle.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState('Send');
  const [isVisible, setIsVisible] = useState(true);
  const onFormUpdate = (catagory, value) => {
    setFormDetails({
      ...formDetails,
      [catagory]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails);
    setIsVisible(false);
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent already' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please send this again later.'});
    }
  };

  if (!isVisible) {
    return (
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img className="py-5" src={turtleImg} alt="contact us" />
            </Col>
            <Col md={6}>
              <h2>
                We appreciate you contacting us. One of our colleagues will get
                back in touch with you soon! Have a great day!
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img className="py-5" src={turtleImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Numbers"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <textarea
                    value={formDetails.message}
                    placeholder="Message"
                    rows="6"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                </Col>
                <Col sm={6} className="px-1">
                  <Button type="submit" variant="light">
                    Send
                  </Button>{" "}
                  {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
