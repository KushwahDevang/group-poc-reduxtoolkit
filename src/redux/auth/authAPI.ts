// authAPI.ts
import axios from "axios";

interface AuthResponse {
  token: string;
}

export const loginUserApi = async (userData: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await axios.post("https://reqres.in/api/login", userData);
  return response.data;
};

export const registerUserApi = async (userData: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await axios.post("https://reqres.in/api/register", userData);
  return response.data;
};
