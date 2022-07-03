import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiFigma,
  SiBitbucket
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vscode" width="60" height="60"/>
        </a>    
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="60" height="60"/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> 
          <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="60" height="60"/>
        </a> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> 
          <img src="https://cdn-icons-png.flaticon.com/512/6125/6125001.png" alt="figma" width="60" height="60"/>
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
