// authAPI.ts
import axios from "axios";

interface AuthResponse {
  token: string;
}

export const loginUserApi = async (userData: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  // const response = await axios.post("https://reqres.in/api/login", userData);
  const response = await axios.post("http://localhost:8080/api/user/login", userData);
  return response.data;
};

export const registerUserApi = async (userData: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  // const response = await axios.post("https://reqres.in/api/register", userData);
  const response = await axios.post("  http://localhost:8080/api/user/register", userData);
  return response.data;
};
