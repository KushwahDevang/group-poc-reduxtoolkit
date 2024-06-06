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
  const { error, message, isForgotPasswordProcess } :any = useSelector(
    (state: RootState) => state.authNew
  );

  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string }>({});

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  useEffect(() => {
    if (isForgotPasswordProcess) {
      navigate("/login");
    }
  }, [isForgotPasswordProcess, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const validateEmail = (email: string) => {
    if (!email) return t("forgotPassword.emailRequired");
    if (!/\S+@\S+\.\S+/.test(email)) return t("forgotPassword.emailInvalid");
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(newEmail),
    }));
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    setErrors({ email: emailError });
    return !emailError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(forgotPassword({ email }));
    }
    setEmail("")
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
                      {errors.email && <p className="error"> {errors.email}</p>}
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
