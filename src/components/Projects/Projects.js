import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SF from "../../Assets/Projects/SF-logo.svg";

import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import TeeTag from "../../Assets/Projects/TeeTag-Logo.png";
import senpi from "../../Assets/Projects/senpi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SF}
              // isBlog={false}
              title="Software Finder"
              description="Software Finder is a platform designed to assist businesses in finding the perfect software efficiently. This product is developed in Next.js as the frontend and Node.js with Strapi as the backend."
              description2="I was responsible for the development of the frontend and backend of the project. Techstack used: Next.js, Node.js, Strapi, GraphQL, PostGreSQL, TailwindCSS, Shadcn/UI, Digital Ocean."
              demoLink="https://softwarefinder.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TeeTag}
              // isBlog={true}
              title="TeeTag"
              description="TeeTag is an ecommerce platform for unique t-shirts to raise funds for underprivileged students. This project is developed in Next.js as the frontend and Node.js as the backend."
              description2="I was responsible for the development of the frontend and backend of the project with all major payment systems integrated. Techstack used: Next.js, Node.js, ArangoDB, Tailwind CSS, and AWS S3."
              demoLink="https://teetag-staging.netlify.app/play-now"
              styles={{alignSelf: "center",width:'275px',height:'150px'}}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={senpi}
              // isBlog={false}
              title="Senpi"
              description="Senpi is an online learning web and mobile platform that offers a variety of courses to help students learn new skills. This project is developed in Angular and Retool at the frontend and Node.js as the backend."
              description2="I was responsible for the development of the frontend and backend of the project. The admin panel is built in Retool. Techstack used: Angular, Retool, Node.js, Firebase, and AWS."
              demoLink="https://dashboard.senpi.guru/courses/courses-dashboard" 
              style={{borderRadius: '100px !important'}}             
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              // isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
