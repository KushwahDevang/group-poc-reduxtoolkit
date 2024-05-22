import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../sass/components/auth.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../sass/components/welcome.scss";

function WelcomePage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.authNew);

  useEffect(() => {
    navigate("/");
  }, [isLoggedIn, navigate]);

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar key="md" expand="md" className=" md bg-blue mb-3">
        <Container fluid>
          <Navbar.Brand href="#">DRK</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                DRK
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="text-uppercase  mt-6">Welcome to Landing Page</h2>
            <button
              className="btn btn-dark mt-3 d-block mx-auto text-uppercase"
              onClick={() => handleClick()}
            >
              Log In
            </button>
            <div className="d-flex justify-content-center mt-3">
              <span className=" heading-noaccount mt-1">No Account?</span>
              <Link to="register" className="btn-register">
                {" "}
                Register YourSelf
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WelcomePage;
