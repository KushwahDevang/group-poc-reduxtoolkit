// ===== Redux toolkit ====
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isLoginInProcess: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  isLoginInProcess: false,
  error: null,
};

// asynchrnous methods

export const userLogin = createAsyncThunk("auth/login", async (creds: any) => {
  const response = await axios.post("https://reqres.in/api/login", creds);
  console.log("response", response);
  return response.data;
});

const authSliceNew = createSlice({
  name: "Auth",
  initialState: initialState,
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoginInProcess = true;
    });
    builder.addCase(userLogin.fulfilled, (state: AuthState, action: any) => {
      localStorage.setItem("authToken", action.payload.token);
      console.log(action);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.isLoginInProcess = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = "Something went wrong";
      state.isLoggedIn = false;
      state.token = null;
      state.isLoginInProcess = false;
    });
  },
});

export const { userLogout, checkIsLoggedIn } = authSliceNew.actions;
export default authSliceNew.reducer;
