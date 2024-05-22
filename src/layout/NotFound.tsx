import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../sass/components/notfound.scss";

const NotFound: React.FC = () => {
  return (
    <>
      <main className=" maincontainer">
        <div className="middlebody shadow p-3 d-flex align-items-center">
          <div className="mx-auto text-center">
            <h1 className="font-bold">404</h1>
            <h6>Not Found</h6>
            <Link to={"/"} className="btn btncolorback">
              Back
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
