import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <br />
            
          
          Hi! I’m <span className="purple">Muhammad Hamza Amir</span>, <br></br>
          A dynamic Senior Software Engineer with over 4 years of experience in crafting high-performance web applications. I specialize in React, Next.js, Node.js, and API integration, consistently delivering top-notch user experiences and optimized performance.
<br/>

<br/>
<h4 className="purple">
Professional Highlights
</h4>

Led development on complex web apps, boosting performance by 50% and achieving 90% in SEO Core Web Vitals. Slashed page load times by 50% with code-splitting and lazy loading.
Enhanced site traffic by 60% with React and Redux, and sped up applications by 30% through database optimizations.
Boosted team productivity by 30% through mentoring.
Ensured data integrity with robust security practices.
{/* <span className="purple">Augment Scale:</span> 
<br/><br/><span className="purple">OneByte:</span> 
<br/><br/><span className="purple">Freelance Work:</span> Built intuitive user interfaces and admin panels using React, Next.js, and Angular. */}
<br/><br/>
<h4 className="purple">
Skills
</h4>
<span className="purple">Frontend:</span> React.js, Next.js, Redux, Angular, Retool, HTML/CSS, Tailwind CSS, Material-UI, Shadcn/ui.
<br/>
<span className="purple">Backend:</span> Node.js, Strapi, Sequelize ORM, Express.js, RESTful APIs.
<br/>
<span className="purple">Tools:</span> JavaScript, TypeScript, PostgreSQL, GraphQL, MySQL, MongoDB, Firebase, Git.
<br/><br/>
{/* <h4 className="purple">
Achievements:
</h4> */}

<h4 className="purple">
Beyond Code:
</h4>
When I’m not coding, I’m playing football, hiking, or exploring new places. I thrive on meeting new people and embracing new challenges.

<br/>
<br/>

<h4 className="purple">
"Let’s connect and create something extraordinary!"
</h4>
          </div>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Sports Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>             
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
