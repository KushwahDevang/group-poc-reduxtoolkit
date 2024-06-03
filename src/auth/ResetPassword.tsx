import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
  const { error, message, isResetPasswordInProcess }: any = useSelector(
    (state: RootState) => state.authNew
  );
  const { token } = useParams<{ token: string }>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    if (message) {
      toast.success(message);
      navigate("/login");
    }
  }, [message, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error(t("resetPassword.passwordMismatch"));
      return;
    }
    dispatch(resetPassword({ token, newPassword }));
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
                        onChange={handlePasswordChange}
                        placeholder={t("resetPassword.newPasswordPlaceholder")}
                      />
                      <label>{t("resetPassword.newPassword")}</label>
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
                      <label>{t("resetPassword.confirmPassword")}</label>
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
