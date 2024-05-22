import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../redux/auth/AuthSliceCopy";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.authNew);

  useEffect(() => {
    console.log("isLoggedIn home", isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div>
        <h1 className="text-center mb-4">WelCome Home</h1>
        <button
          className="btn btn-dark mt-2 d-block mx-auto"
          onClick={() => dispatch(userLogout())}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
