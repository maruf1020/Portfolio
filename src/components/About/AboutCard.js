import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maruf Billah </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am currently employed as a software Engineer 2 at <a href="https://echologyx.com/"><span className="purple">Echologyx</span></a>.
            <br />
            I have completed Integrated BSc (IBSc) in Computer Science and Engineering at NSU, Dhaka.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with family and friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am not merely a developer or programmer who writes code for a specific programming language. I am an Engineer, a problem solver at heart."
          </p>
          <footer className="blockquote-footer">Maruf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
