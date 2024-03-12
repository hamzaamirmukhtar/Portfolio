import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Hamza Amir </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Onebyte.
            <br />
           I have completed my Bachelors in Computer Sciences from the National University of Computer and Emerging Sciences (FAST-NUCES).
            <br />
            <br />
            I am a Full Stack Web Developer with experience in building web applications using <span className="purple">JavaScript, React, Nextjs, Node.js, Express.</span> I have also worked with databases like <span className="purple">MongoDB, PostgreSQL, and Arangodb.</span> I have also worked with cloud platforms like <span className="purple">AWS and Digital Ocean.</span>
            <br />
            Apart from coding, some activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>             
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
