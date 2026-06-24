import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I'm an <i><b className="purple">AI & Full Stack Engineer</b></i> passionate about building intelligent, scalable, and impactful digital products.

              <br />
              <br />

              Over the past <i><b className="purple">4+ years</b></i>, I have evolved from crafting responsive user experiences to architecting robust backend systems and engineering <i><b className="purple">AI-powered applications using Generative AI, LLMs, RAG, and Agentic AI.</b></i>

              <br />
              <br />

              My expertise lies in bridging strong <i><b className="purple">software engineering fundamentals</b></i> with modern AI technologies to design and deliver <i><b className="purple">production-ready, scalable solutions</b></i> that solve real-world business problems.

              <br />
              <br />

              I enjoy working across the entire technology stack—from developing intuitive interfaces and scalable APIs to building <i><b className="purple">intelligent agents, automation workflows, and data-driven systems.</b></i>

              <br />
              <br />

              I am deeply committed to <i><b className="purple">continuous learning and innovation</b></i>, constantly exploring emerging technologies, architectural patterns, and best practices to build better products and stay ahead in the rapidly evolving technology landscape.

              <br />
              <br />

              Beyond technology, I am also a dedicated <i><b className="purple">guitarist and mentor</b></i>. Running and teaching through a music academy has strengthened my abilities in <i><b className="purple">leadership, communication, mentoring, and operational management</b></i>, enabling me to effectively lead initiatives, collaborate across teams, and inspire continuous growth in others.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Creative-Me-Sanket"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/sanket_khule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/sanket-khule-47213499"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
