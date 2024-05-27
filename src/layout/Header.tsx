import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../sass/components/auth.scss";
import { Link } from "react-router-dom";
import "../sass/components/welcome.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    // Set the initial state based on the current language
    if (i18n.language === "es") {
      setChecked(true);
    }
  }, [i18n.language]);

  const handleToggleChange = () => {
    const newLanguage = checked ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
                <Nav.Link href="#action1">{t("header.home")}</Nav.Link>
                <Nav.Link href="#action2">{t("header.link")}</Nav.Link>
                <NavDropdown
                  title={t("header.dropdown")}
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item href="#action3">
                    {t("header.action")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {t("header.another action")}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                  {t("header.something else here")}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder={t("header.search")}
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">{t("header.search")}</Button>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={checked}
                    onChange={handleToggleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {checked ? "English" : "Spanish"}
                  </label>
                </div>
                {/* <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("es")}>Español</button> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
