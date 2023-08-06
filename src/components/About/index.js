import React from 'react';
import profileImage from "../../assets/profile/profile_picture.png";
import gitHubLogo from "../../assets/icons/GitHub-logo.png";
import linkedIn from "../../assets/icons/linkedIn-logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <section> 
    <Container >
      <Row>
        <Col className="text-center my-4">
          <h1 id="about">About Me</h1>
        </Col>
      </Row>

      <Row>
        <Col className="text-center my-1">
          <Image src={profileImage} 
          className="my-2" 
          style={{ width: "25%" }} 
          alt="cover" 
          roundedCircle />
        </Col>
      </Row>
   
      <Row>
        <Col className="text-center my-5">
        <p>I am currently working as a research scientist in the field of gene therapy.  My responsibilities include designing and developing analytical templates for the analysis of raw data exported off of hard instruments.  I have entered the field of coding with regards to the instruments that I work on, so hopefully one day, I can improve on their performance and thoughput.</p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center my-5">
          <a href="https://github.com/hinnenk2" target="_blank">
          <Image src={gitHubLogo} 
          className="my-2r" 
          style={{ width: "25%" }} 
          alt="cover" 
          rounded />
          </a>

          <a href="https://www.linkedin.com/in/ian-hinnenkamp-4a1a2398/" target="_blank">
          <Image src={linkedIn} 
          className="my-2r" 
          style={{ width: "25%" }} 
          alt="github repo" 
          href="https://www.linkedin.com/in/ian-hinnenkamp-4a1a2398/"
          target="_blank"
          rounded />
          </a>
        </Col>
      </Row>
    </Container>

    </section>
  );
}

export default About;