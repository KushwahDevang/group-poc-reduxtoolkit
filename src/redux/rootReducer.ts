import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./auth/registrationSlice";
import authSliceNew from "./auth/AuthSliceCopy";

const rootReducer = combineReducers({
  registration: registrationReducer,
  authNew: authSliceNew,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
