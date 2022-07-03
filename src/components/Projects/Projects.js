import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import binteger from "../../Assets/Projects/binteger.jpg";
import resource from "../../Assets/Projects/resource.jpg";
import weather from "../../Assets/Projects/weather.png";
import blog from "../../Assets/Projects/blog.png";
import codeeasy from "../../Assets/Projects/codeeasy.png";
import task from "../../Assets/Projects/task.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resource}
              isBlog={false}
              title="ResourceMine"
              description="Build a web application that provides access to previous year exam papers.Implemented Authentication for signup/login and session management using passport.js.Used Express to create routes on server-side."
              ghLink="https://github.com/Chaudhary456/ResourceMine"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="TaskManager-API"
              description="Build a REST-API using node.js to store users tasks.Implemented Authentication for signup/login for user using jwt-tokens.User will be notified via an email whenever he signup or delete profile."
              ghLink="https://github.com/Chaudhary456/Task-manager-api"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Bharat-Mausum"
              description="Build a web-application in Node.js to fetch weather report of any location.
              Used Mapbox API to get the geocoordinates of requested location.
              Used weather API to fetch the weather report of requested geocoordinates."
              ghLink="https://github.com/Chaudhary456/Weather-app"
              demoLink="https://bharat-mausam-application.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeeasy}
              isBlog={false}
              title="CodeEasy"
              description="A Web App that integrates most praised programming and development courses on internet.
              Used React.js to create components of webpage.
              Used JSON to create database and created an API to fetch data from JSON database."
              ghLink="https://github.com/Chaudhary456/CodeEasy"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="BlogSpot"
              description="A Web App where you can Create, Read, Delete and Update your blogs.
              Used React.js to create components of webpage.
              Used JSON to create database and created an API to fetch data from JSON database."
              ghLink="https://github.com/Chaudhary456/Blog-Spot"
              demoLink="" //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={binteger}
              isBlog={false}
              title="BigInteger Library"
              description="A C++ library to perform mathematical operations over VERY LARGE NUMBERS."
              ghLink="https://github.com/Chaudhary456/biginteger"
              demoLink=""  //    <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
