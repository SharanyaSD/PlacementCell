import axios, { AxiosError } from "axios";
import API_BASE_URL from "./apiConfig";

interface User {
  id: number;
  role_id: number;
  email: string;
  batch: string;
  branch: string;
  created_at: string;
  first_name: string;
  last_name: string;
  linkedin: string;
  password_digest: string;
  placed: boolean;
  updated_at: string;
}

interface LoginResponse {
  token: string;
  user: User;
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

