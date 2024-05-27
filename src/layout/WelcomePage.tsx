import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../sass/components/auth.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../sass/components/welcome.scss";
import Header from "./Header";
import { useTranslation } from "react-i18next";

function WelcomePage() {
  const { t } = useTranslation();
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
      <Header />
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="text-uppercase  mt-6">
              {t("Welcome to Landing Page")}
            </h2>
            <button
              className="btn btn-dark mt-3 d-block mx-auto text-uppercase"
              onClick={() => handleClick()}
            >
              {t("login.login")}
            </button>
            <div className="d-flex justify-content-center mt-3">
              <span className=" heading-noaccount mt-1">
                {t("login.no account")}
              </span>
              <Link to="register" className="btn-register">
                {t("login.register yourself")}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WelcomePage;
