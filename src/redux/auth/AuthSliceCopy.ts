// authSlicecopy.t
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Interface for User and AuthState
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
  isForgotPasswordInProcess: boolean;
  isResetPasswordInProcess: boolean;
  message: string | null;
}

// Initial state
const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  isLoginInProcess: false,
  error: null,
  user: null,
  isForgotPasswordInProcess: false,
  isResetPasswordInProcess: false,
  message: null,
};

// Asynchronous actions
export const userLogin = createAsyncThunk("auth/login", async (creds: any) => {
  const response = await axios.post(
    "http://localhost:8080/api/user/login",
    creds
  );
  const userInfo = await axios.get(`https://reqres.in/api/users/4`);
  return { token: response.data.token, user: userInfo.data.data };
});

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: { email: string }) => {
    const response = await axios.post(
      "http://localhost:8080/api/user/forgot-password",
      email
    );
    return response.data.message;
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data: { token: string; newPassword: string }) => {
    const response = await axios.post(
      "http://localhost:8080/api/user/reset-password",
      data
    );
    return response.data.message;
  }
);

// Auth slice
const authSliceNew = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    checkIsLoggedIn: (state) => {
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
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoginInProcess = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoginInProcess = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoginInProcess = false;
        state.error = action.error.message || "Failed to login";
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isForgotPasswordInProcess = true;
        state.message = null;
        state.error = null;
      })
      .addCase(
        forgotPassword.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isForgotPasswordInProcess = false;
          state.message = action.payload;
        }
      )
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isForgotPasswordInProcess = false;
        state.error =
          action.error.message || "Failed to send forgot password email";
      })
      .addCase(resetPassword.pending, (state) => {
        state.isResetPasswordInProcess = true;
        state.message = null;
        state.error = null;
      })
      .addCase(
        resetPassword.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isResetPasswordInProcess = false;
          state.message = action.payload;
        }
      )
      .addCase(resetPassword.rejected, (state, action) => {
        state.isResetPasswordInProcess = false;
        state.error = action.error.message || "Failed to reset password";
      });
  },
});

// Export the actions and reducer
export const { checkIsLoggedIn, userLogout } = authSliceNew.actions;
export default authSliceNew.reducer;
