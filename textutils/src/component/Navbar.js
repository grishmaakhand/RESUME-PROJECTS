import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbarfunc(props) {
  const vstyle = { textDecoration: "none" };
  return (
    <>
      <Navbar
        bg={props.vmode}
        className={`text-${props.vmode === "light" ? "dark" : "light"}`}
      >
        <Container>
          <Navbar.Brand>
            <Link
              className={`text-${props.vmode === "light" ? "dark" : "light"}`}
              to="/"
              style={vstyle}
            >
              {props.title}
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/"
                className={`text-${props.vmode === "light" ? "dark" : "light"}`}
                style={vstyle}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={`text-${props.vmode === "light" ? "dark" : "light"}`}
                style={vstyle}
                to="/aboutus"
              >
                About us
              </Link>
            </Nav.Link>
          </Nav>
          <Form>
            <Form.Check
              onClick={props.modebtn}
              type="switch"
              id="custom-switch"
              label={props.vmode === "light" ? "Dark Mode " : "Light Mode"}
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}
Navbarfunc.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbarfunc.defaultProps = {
  title: "Enter Brand Name",
};
export default Navbarfunc;
