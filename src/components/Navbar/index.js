import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
class navbar extends Component {
  //import props... pass props to dropdown

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand href="/">Ryan Brutocao</Navbar.Brand>
          <Navbar.Toggle />
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/about" eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">

              <NavDropdown href="/projects" title="Projects" id="nav-dropdown">
                <NavDropdown.Item href="/projects" eventKey="project_1">project 1</NavDropdown.Item>
                {/* <NavDropdown.Item href="/projects" eventKey={props.name}>{props.name}</NavDropdown.Item> */}
                <NavDropdown.Item href="/projects" eventKey="project_3">project 3</NavDropdown.Item>
              </NavDropdown>

            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/projects" eventKey="contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>


          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Ryan Brutocao</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

      </div >
    );
  }
}

export default navbar;

