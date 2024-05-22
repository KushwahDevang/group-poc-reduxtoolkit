// registrationSlice.ts
import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { registerUserApi } from "./authAPI"; // Import your API call
import { AppThunk } from "../store";
// import { navigate } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

interface RegistrationState {
  isRegistered: boolean; 
  error: string | null;
}

const initialState: RegistrationState = {
  isRegistered: false,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registerSuccess(state) {
      state.isRegistered = true;
      state.error = null;
    //   navigate("/login"); // Navigate to the login page after successful registration
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.isRegistered = false;
      state.error = action.payload;
    },
  },
});

export const { registerSuccess, registerFailure } = registrationSlice.actions;

export const registerUser =
  (userData: UserData): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      await registerUserApi(userData);
      dispatch(registerSuccess());
    } catch (error) {
      dispatch(registerFailure((error as any).message));
    }
  };

export default registrationSlice.reducer;   
