import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../redux/rootReducer";
import { forgotPassword } from "../redux/auth/AuthSliceCopy";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { error, message, isForgotPasswordInProcess }: any = useSelector(
    (state: RootState) => state.authNew
  );
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }));
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2>{t("forgotPassword.title")}</h2>
                  <p>{t("forgotPassword.description")}</p>
                </div>
                <div className="form-input">
                  <h2>{t("forgotPassword.formTitle")}</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={t("forgotPassword.emailPlaceholder")}
                      />

                      <label>{t("forgotPassword.email")}</label>
                    </div>
                    <div className="myform-button">
                      <button className="myform-btn" type="submit">
                        {t("forgotPassword.submit")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <span className="heading-noaccount-login mt-1">
              {t("forgotPassword.remembered")}
            </span>
            <Link to="/login" className="btn-register-login">
              {t("forgotPassword.login")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
