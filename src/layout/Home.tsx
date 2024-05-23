import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { userLogout } from "../redux/auth/AuthSliceCopy";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIsLoggedIn } from "../redux/auth/AuthSliceCopy";
import Header from "./Header";
// import { userLogout } from "../redux/auth/AuthSliceCopy";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.authNew);

  useEffect(() => {
    dispatch(checkIsLoggedIn());
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(userLogout());
    navigate("/");
    window.location.reload();
  };

  if (!isLoggedIn || !user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mt-5">
              <h1 className="text-center mb-4">Welcome to the Home Page</h1>
              <div className="user-details">
                <p className="text-center">
                  <strong>Name:</strong> {user.first_name} {user.last_name}
                </p>
                <p className="text-center">
                  <strong>Email: </strong>
                  {user.email}
                </p>
                <div className="d-flex justify-content-center">
                  <img
                    className="bg-info rounded-circle"
                    src={user.avatar}
                    alt="User Avatar"
                  />
                </div>
              </div>
              <button
                className="btn btn-dark mt-4 d-block mx-auto"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
