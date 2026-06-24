import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanket Khule </span>
            from <span className="purple">Pune, India.</span>
            <br />
            <br />
            I am an <span className="purple">AI & Full Stack Engineer</span> with over
            <span className="purple"> 4+ years of experience</span> building scalable web
            applications and intelligent systems powered by
            <span className="purple"> Generative AI, LLMs, RAG, and Agentic AI.</span>
            <br />
            <br />
            Currently, I work as a software engineer at
            <span className="purple"> Inode Design Pvt. Ltd.</span>, where I focus on
            designing and developing production-grade applications, solving complex
            engineering challenges, and delivering solutions that create real business
            impact.
            <br />
            <br />
            I hold a
            <span className="purple">
              {" "}Master of Computer Applications (MCA)
            </span>
            in Computer Science from
            <span className="purple">
              {" "}D. Y. Patil Institute of Master of Computer Applications.
            </span>
            <br />
            <br />
            I am passionate about continuous learning, system design, and exploring
            emerging technologies that shape the future of software engineering and
            artificial intelligence.
            <br />
            <br />
            Beyond technology, I enjoy activities that help me stay creative,
            disciplined, and connected with people.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing & Teaching Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Tech Podcasts & Sharing Knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Perspectives
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building intelligent solutions, empowering people, and creating technology that makes a meaningful impact."
          </p>

          <footer className="blockquote-footer">Sanket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
