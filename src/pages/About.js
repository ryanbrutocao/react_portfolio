import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row } from 'react-bootstrap'
import face from '../images/myface.jpg'
import uplogo from '../images/uplogo.jpg'
import dulogo from '../images/dulogo.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <hr />
        <Container>
          <Row>
            <Image src={uplogo}
              rounded
              width="40%"
              alt="University of Portland Logo"
            />
            <Image src={face}
              rounded
              width="20%"
              height="25%"
              alt="Ryan Brutocao"
            />
            <Image src={dulogo}
              rounded
              width="40%"
              alt="University of Denver logo"
            />
          </Row>
        </Container>
        <Container>
          <hr />

          <p />After receiving a Marketing & Management degree from the University of Portland I went to work for my families wine business.
          For the past 10 years I have developed, grown, and managed our custom wine sales division. In 2016 I launched a small coffee roasting business out of my garage. While I learned many
          things from that venture, I ultimately decided to sell the business and go back to school for web development. <br />

          <br />During the University of Denver Full Stack Web Development bootcamp I was exposed to many facets of web development. After covering the basic browser based technologies like HTML, CSS and JavaScript
           we learned libraries like Bootstrap, JQuery, Handlebars, Firebase and React. We learned MySQL and MongoDB as backend technologies as well as Node, Express, and user authentication for server side development. Throughout the course, I learned
           how these technologies work and how to integrate them into modern web applications. Today, I am comfortable in my knowledge base and confident that I can pick up new technologies quickly.
</Container>

      </div>
    );
  }
}

export default About;