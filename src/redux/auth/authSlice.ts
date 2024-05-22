// // authSlice.ts
// import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
// import { loginUserApi, registerUserApi } from "./authAPI";
// import { AppThunk } from "../store";

// interface UserData {
//   email: string;
//   password: string;
// }

// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
//   error: string | null;
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
//   token: null,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess(state, action: PayloadAction<string>) {
//       state.isAuthenticated = true;
//       state.token = action.payload;
//       state.error = null;
//     },
//     loginFailure(state, action: PayloadAction<string>) {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.error = null;
//     },
//   },
// });

// export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// export const loginUser = (userData: { email: string; password: string }): AppThunk =>
//   async (dispatch: Dispatch) => {
//     try {
//       const response = await loginUserApi(userData);
//       dispatch(loginSuccess(response.token));
//     } catch (error) {
//       dispatch(loginFailure((error as any).message));
//     }
//   };

// export const registerUser = (userData: { email: string; password: string }): AppThunk =>
//   async (dispatch: Dispatch) => {
//     try {
//       const response = await registerUserApi(userData);
//       dispatch(loginSuccess(response.token));
//     } catch (error) {
//       dispatch(loginFailure((error as any).message));
//     }
//   };

// export default authSlice.reducer;





// authSlice.ts
// import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
// import { loginUserApi, registerUserApi } from "./authAPI";
// import { AppThunk } from "../store";
 
// interface UserData {
//   email: string;
//   password: string;
// }
 
// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
//   error: string | null;
// }
 
// const initialState: AuthState = {
//   isAuthenticated: false,
//   token: null,
//   error: null,
// };
 
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess(state, action: PayloadAction<string>) {
//       state.isAuthenticated = true;
//       state.token = action.payload;
//       state.error = null;
//     },
//     loginFailure(state, action: PayloadAction<string>) {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.error = null;
//     },
//     // registerSuccess(state, action: PayloadAction<string>) {
//     //   state.isAuthenticated = true;
//     //   state.token = action.payload;
//     //   state.error = null;
//     // },
//     // registerFailure(state, action: PayloadAction<string>) {
//     //   state.isAuthenticated = false;
//     //   state.token = null;
//     //   state.error = action.payload;
//     // },
//   },
// });
 
// export const { loginSuccess, loginFailure, logout,
//   //  registerSuccess, registerFailure
//    } = authSlice.actions;
 
// export const loginUser = (userData: { email: string; password: string }): AppThunk => async (dispatch: Dispatch) => {
//   try {
//     const response = await loginUserApi(userData);
//     dispatch(loginSuccess(response.token));
//   } catch (error) {
//     dispatch(loginFailure((error as any).message));
//   }
// };
 
// // export const registerUser = (userData: { email: string; password: string }): AppThunk => async (dispatch: Dispatch) => {
// //   try {
// //     const response = await registerUserApi(userData);
// //     dispatch(registerSuccess(response.token));
// //   } catch (error) {
// //     dispatch(registerFailure((error as any).message));
// //   }
// // };
 
// export default authSlice.reducer;



// authSlice.ts
// import { createSlice, PayloadAction, Dispatch, createAsyncThunk } from "@reduxjs/toolkit";
// import { loginUserApi, registerUserApi } from "./authAPI";
// import { AppThunk } from "../store";
// import axios from "axios";
 
// interface UserData {
//   email: string;
//   password: string;
// }
 
// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
//   error: string | null;
// }
 
// const initialState: AuthState = {
//   isAuthenticated: false,
//   token: null,
//   error: null,
// };
 

// export const login: any = createAsyncThunk("login", async (data: any) => {
//   const response = await axios.post("https://reqres.in/api/login", data);
//   console.log("response", response);
//   return response.data.token;
// });


// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess(state, action: PayloadAction<string>) {
//       state.isAuthenticated = true;
//       state.token = action.payload;
//       state.error = null;
//     },
//     loginFailure(state, action: PayloadAction<string>) {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.token = null;
//       state.error = null;
//     },
//     // registerSuccess(state, action: PayloadAction<string>) {
//     //   state.isAuthenticated = true;
//     //   state.token = action.payload;
//     //   state.error = null;
//     // },
//     // registerFailure(state, action: PayloadAction<string>) {
//     //   state.isAuthenticated = false;
//     //   state.token = null;
//     //   state.error = action.payload;
//     // },
//   },
// });
 
// export const { loginSuccess, loginFailure, logout,
//   //  registerSuccess, registerFailure
//    } = authSlice.actions;
 
// export const loginUser = (userData: { email: string; password: string }): AppThunk => async (dispatch: Dispatch) => {
//   try {
//     const response = await loginUserApi(userData);
//     dispatch(loginSuccess(response.token));
//   } catch (error) {
//     dispatch(loginFailure((error as any).message));
//   }
// };
 
// // export const registerUser = (userData: { email: string; password: string }): AppThunk => async (dispatch: Dispatch) => {
// //   try {
// //     const response = await registerUserApi(userData);
// //     dispatch(registerSuccess(response.token));
// //   } catch (error) {
// //     dispatch(registerFailure((error as any).message));
// //   }
// // };
 
// export default authSlice.reducer;