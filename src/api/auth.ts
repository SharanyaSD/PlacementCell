import axios, { AxiosError } from "axios";
import API_BASE_URL from "./apiConfig";

interface LoginResponse {
  token: string;
}

const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError<{ error: string }>; 
    if (axiosError.response?.data) {
      throw new Error(axiosError.response.data.error);
    } else {
      throw new Error("An error occurred");
    }
  }
};

export default login;

