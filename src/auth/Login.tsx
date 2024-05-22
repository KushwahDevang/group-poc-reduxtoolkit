import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../sass/components/auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../redux/rootReducer";
import { userLogin } from "../redux/auth/AuthSliceCopy";

const Login: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { isLoggedIn, error, token, isLoginInProcess }: any = useSelector(
    (state: RootState) => {
      console.log("state", state.authNew);
      return state.authNew;
    }
  );
  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("cityslicka");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  //   useEffect(() => {
  //     navigate("/");
  //   }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isLoginInProcess) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isLoginInProcess, navigate]);

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

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setErrors({
      email: emailError,
      password: passwordError,
    });
    return !emailError && !passwordError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(userLogin({ email: email, password: password }));
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2>Login</h2>
                  <p>
                    A login form is a user interface component that collects a
                    username and password to authenticate users for accessing a
                    system or application. It typically includes fields for
                    input and a submit button.
                  </p>
                </div>
                <div className="form-input">
                  <h2>Login Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter email"
                      />
                      <label>Email</label>
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                      />
                      <label>Password</label>
                      {errors.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div>
                    <div className="myform-button">
                      <button className="myform-btn" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
                    <span className=" heading-noaccount-login mt-1">No Account?</span>
                    <Link to="/register" className="btn-register-login">
                      {" "}
                      Register YourSelf
                    </Link>
                  </div>
        </div>
      </section>
    </>
  );
};

export default Login;
