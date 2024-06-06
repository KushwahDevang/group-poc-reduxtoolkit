import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/registrationSlice";
import "../sass/components/auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../redux/rootReducer";
import { userLogin } from "../redux/auth/AuthSliceCopy";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { isRegistered, error } = useSelector(
    (state: RootState) => state.registration
  );
  // const { isLoggedIn } = useSelector((state: RootState) => state.authNew);

  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("pistol");
  const [confirmPassword, setConfirmPassword] = useState<string>("pistol");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  useEffect(() => {
    if (isRegistered) {
      dispatch(userLogin({ email, password }));
      navigate("/home");
    }
  }, [isRegistered, dispatch, email, password]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const validateEmail = (email: string) => {
    if (!email) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is invalid.";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    return "";
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    if (!confirmPassword) return "Confirm Password is required.";
    if (confirmPassword !== password) return "Passwords do not match.";
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(newPassword),
    }));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: validateConfirmPassword(newConfirmPassword),
    }));
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    setErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });
    return !emailError && !passwordError && !confirmPasswordError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(registerUser({ email, password }));
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area register-form">
                <div className="form-content">
                  <h2>{t("register.register")}</h2>
                  <p>{t("register.register from text")}</p>
                </div>
                <div className="form-input">
                  <h2>{t("register.registers form")}</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={t("register.enter email")}
                      />
                      <label>{t("register.email")}</label>
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={t("register.password")}
                      />
                      <label>{t("register.password")}</label>
                      {errors.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder={t("register.confim password")}
                      />
                      <label>{t("register.confim password")}</label>
                      {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                      )}
                    </div>
                    <div className="myform-button">
                      <button className="myform-btn" type="submit">
                        {t("register.register")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <span className="heading-noaccount-login mt-1">
              {t("register.already have account")}
            </span>
            <Link to="/login" className="btn-register-login">
              {" "}
              {t("register.login")}{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
