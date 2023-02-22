import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import logo from "../assets/img/shepherd.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Sea Shepherd News</h2>
              <p>In the Headlines</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={logo} alt="Image" />
                  <h5>Sea Shepherd Adds New Ship to Operation</h5>
                </div>
                <div className="item">
                  <img src={logo} alt="Image" />
                  <h5>Illegal Fishing in Vaquita Habitat Reduces by 79%</h5>
                </div>
                <div className="item">
                  <img src={logo} alt="Image" />
                  <h5>A Win for Endangered Species</h5>
                </div>
                <div className="item">
                  <img src={logo} alt="Image" />
                  <h5>Sea Shepherd Working with Navy to Remove Illegal Nets</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
