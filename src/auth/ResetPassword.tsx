import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../redux/rootReducer";
import { resetPassword } from "../redux/auth/AuthSliceCopy";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { error, message, isResetPasswordProcess }: any = useSelector(
    (state: RootState) => state.authNew
  );

  const [searchParams] = useSearchParams();
  const token: any = searchParams.get("token");

  console.log("Token Mil JA bhau", token);

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    newPassword?: string;
    confirmPassword?: string;
  }>({});

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  useEffect(() => {
    if (isResetPasswordProcess) {
      navigate("/login");
    }
  }, [isResetPasswordProcess, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const validateNewPassword = (password: string) => {
    if (!password) return t("resetPassword.passwordRequired");
    return "";
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ) => {
    if (!confirmPassword) return t("resetPassword.confirmPasswordRequired");
    if (password !== confirmPassword)
      return t("resetPassword.passwordMismatch");
    return "";
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      newPassword: validateNewPassword(newPassword),
      confirmPassword: validateConfirmPassword(newPassword, confirmPassword),
    }));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: validateConfirmPassword(newPassword, newConfirmPassword),
    }));
  };

  const validateForm = () => {
    const newPasswordError = validateNewPassword(newPassword);
    const confirmPasswordError = validateConfirmPassword(
      newPassword,
      confirmPassword
    );
    setErrors({
      newPassword: newPasswordError,
      confirmPassword: confirmPasswordError,
    });
    return !newPasswordError && !confirmPasswordError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(resetPassword({ token, newPassword }));
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
              <div className="form-area login-form">
                <div className="form-content">
                  <h2>{t("resetPassword.title")}</h2>
                  <p>{t("resetPassword.description")}</p>
                </div>
                <div className="form-input">
                  <h2>{t("resetPassword.formTitle")}</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        placeholder={t("resetPassword.newPasswordPlaceholder")}
                      />
                      <label>{t("resetPassword.newPasswordPlaceholder")}</label>
                      {errors.newPassword && (
                        <p className="error">{errors.newPassword}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder={t(
                          "resetPassword.confirmPasswordPlaceholder"
                        )}
                      />
                      <label>
                        {t("resetPassword.confirmPasswordPlaceholder")}
                      </label>
                      {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                      )}
                    </div>
                    <div className="myform-button">
                      <button className="myform-btn" type="submit">
                        {t("resetPassword.submit")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
