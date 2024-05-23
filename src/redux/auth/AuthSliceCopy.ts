// authSlicecopy.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isLoginInProcess: boolean;
  error: string | null;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  isLoginInProcess: false,
  error: null,
  user: null,
};

// Asynchronous methods
export const userLogin = createAsyncThunk("auth/login", async (creds: any) => {
  const response = await axios.post("https://reqres.in/api/login", creds);
  const userInfo = await axios.get(`https://reqres.in/api/users/4`);
  return { token: response.data.token, user: userInfo.data.data };
});

const authSliceNew = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    checkIsLoggedIn: (state): any => {
      const token = localStorage.getItem("authToken");
      if (token) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    userLogout: (state) => {
      localStorage.removeItem("authToken");
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
      state.isLoginInProcess = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoginInProcess = true;
    });
    builder.addCase(userLogin.fulfilled, (state: AuthState, action: any) => {
      localStorage.setItem("authToken", action.payload.token);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoginInProcess = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = "Something went wrong";
      state.isLoggedIn = false;
      state.token = null;
      state.isLoginInProcess = false;
      state.user = null;
    });
  },
});

export const { userLogout, checkIsLoggedIn } = authSliceNew.actions;
export default authSliceNew.reducer;
