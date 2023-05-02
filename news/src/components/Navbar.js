import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const vstyle = {
      textDecoration: "none",
      color: "white",
      padding: "10px ",
    };
    return (
      <>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand>
              <Link style={vstyle} to="">
                Navbar
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav>
                <Link style={vstyle} to="">
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/business">
                  Business
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/entertainment">
                  Entertainment
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/general">
                  General
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/health">
                  Health
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/science">
                  Science
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/sports">
                  Sports
                </Link>
              </Nav>
              <Nav>
                <Link style={vstyle} to="/technology">
                  Technology
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
