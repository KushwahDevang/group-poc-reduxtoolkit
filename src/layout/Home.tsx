import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIsLoggedIn } from "../redux/auth/AuthSliceCopy";
// import { userLogout } from "../redux/auth/AuthSliceCopy";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.authNew);

  //   useEffect(() => {
  //     console.log("isLoggedIn home", isLoggedIn);
  //     if (!isLoggedIn) {
  //       navigate("/");
  //     }
  //   }, [isLoggedIn]);

  useEffect(() => {
    dispatch(checkIsLoggedIn());
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn, dispatch]);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    console.log("LocalSotorageHome", localStorage);
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <div className="mt-5">
        <h1 className="text-center mb-4">WelCome Home</h1>
        <button
          className="btn btn-dark mt-2 d-block mx-auto"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
