import React from "react";
import { Container, Col, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/whale.jpg";
import projImg2 from "../assets/img/rescure.jpg";
import saleship from "../assets/img/saleship.jpg";
import farley from "../assets/img/fleet.jpg";
import bob from "../assets/img/ship.jpg";
import martin from "../assets/img/marting.jpg";
import director1 from "../assets/img/director1.jpg";
import director2 from "../assets/img/director2.jpg";
import director3 from "../assets/img/director3.jpg";

export function Projects() {
  const mission = [
    {
      title: "Saving Wildlife",
      description:
        "Working under direct supervision and in complete partnership with host governments",
      imgUrl: projImg1,
    },
    {
      title: "Arresting illegal Fishers",
      description: "Working with the Navi",
      imgUrl: projImg2,
    },
    {
      title: "Fighting for Marine life",
      description:
        "Over the past five years, we assisted law enforcers from our partner governments as they arrested dozens of vessels resulting in numerous successful prosecutions. ",
      imgUrl: saleship,
    },
  ];
  const fleet = [
    {
      title: "Bob Barker",
      description: "long-Range Ice-Strengthended Vessel",
      imgUrl: bob,
    },
    {
      title: "Farley Mowat",
      description: "Coast Guard Cutter",
      imgUrl: farley,
    },
    {
      title: "Martin Sheen",
      description: "Sailboat",
      imgUrl: martin,
    },
  ];
  const team = [
    {
      title: "Director",
      description: "Pritam Singh",
      imgUrl: director2,
    },
    {
      title: "Digital Media Coordinator",
      description: "Chris Smith",
      imgUrl: director1,
    },
    {
      title: "Science Coordinator",
      description: "Laura Sanchez",
      imgUrl: director3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>who we are</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Our Mission</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Our Fleet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Our Team</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {mission.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {fleet.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {team.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Fixed Background img right"
      ></img>
    </section>
  );
}
