import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./layout/WelcomePage";
import NotFound from "./layout/NotFound";
import Home from "./layout/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { checkIsLoggedIn } from "./redux/auth/AuthSliceCopy";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn }: any = useSelector((state: RootState) => state.authNew);

  useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<WelcomePage />} index />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} index />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
