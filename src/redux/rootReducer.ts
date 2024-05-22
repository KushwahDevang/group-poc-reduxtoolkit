import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import registrationReducer from "./auth/registrationSlice";
import authSliceNew from "./auth/AuthSliceCopy";
// import authSliceNew from "./auth/authSlice";
// import counterReducer from "../features/counter/counterSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  authNew: authSliceNew,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
