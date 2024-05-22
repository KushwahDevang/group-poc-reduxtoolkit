import React, { useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./layout/WelcomePage";
import NotFound from "./layout/NotFound";
import Home from "./layout/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { checkIsLoggedIn } from "./redux/auth/AuthSliceCopy";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn }: any = useSelector((state: RootState) => state.authNew);
  // const [isUserLoggedIn, setUserLoggedInStatus] = useState(false);
  console.log("LOgged In App.tsx", isLoggedIn);

  useEffect(() => {
    dispatch(checkIsLoggedIn());
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<WelcomePage />} index />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
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
