import axios, { AxiosError } from "axios";
import API_BASE_URL from "./apiConfig";
import storage from "../utilities/storage";

export interface User {
  
  role_id: number;
  email: string;
  batch: string;
  branch: string;
  created_at: string;
  first_name: string;
  last_name: string;
  password:string
  linkedin: string;
  placed: boolean;
}



export interface Company {
  id?:number,
  name: string,
  information: string,
  website:string
}

export interface Opportunity {
  company_id : number,
  status:string,
  no_of_applications:string,
  designation:string,
  skillset:string,
  package:string,
  
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

const createUser = async (payload: {}) => {
  console.log(payload);
  return await axios({
    method: "POST",
    url: `${API_BASE_URL}/users`,
    data: payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  });
};

export const createCompany = async (payload: {} ) => {
  console.log(payload);
  return await axios({
    method: "POST",
    url: `${API_BASE_URL}/companies`,
    data: payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  });
}

export const createCompanyPlacement = async (payload:{}, id :string) => {
  console.log(payload);
  return await axios({
    method: "POST",
    url: `${API_BASE_URL}/companies/${id}/company_placements`,
    data: payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  });
}

export const createOpportunity = async (payload: {}) => {
  console.log("create opportunity",payload);
  return await axios({
    method:"POST",
    url:`${API_BASE_URL}/opportunities`,
    data:payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  })
  
}

export const handleUpdateOpportunity = async (payload:{},id:number) => {
  console.log(payload);
  return await axios({
    method:"PUT",
    url:`${API_BASE_URL}/opportunities/${id}`,
    data:payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  })
  
}

export const handleDeleteOpportunity = async (id:number) => {
  // console.log(payload);
  return await axios({
    method:"DELETE",
    url:`${API_BASE_URL}/opportunities/${id}`,  
    // data:payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  })
  
}

export const handleUpdateCompany = async (payload: {}, id: number) => {
  console.log(payload);
  return await axios({
    method:"PUT",
    url:`${API_BASE_URL}/companies/${id}`,
    data:payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  })
  
}

// const updateUser = async (userId: number, userData: User): Promise<User> => {
//   try {
//     const response = await axios.put<User>(`${API_BASE_URL}/users/${userId}`, userData);
//     return response.data;
//   } catch (error: any) {
//     const axiosError = error as AxiosError<{ error: string }>; 
//     if (axiosError.response?.data) {
//       throw new Error(axiosError.response.data.error);
//     } else {
//       throw new Error("An error occurred");
//     }
//   }
// };

// const deleteUser = async (userId: number): Promise<void> => {
//   try {
//     await axios.delete<void>(`${API_BASE_URL}/users/${userId}`);
//   } catch (error: any) {
//     const axiosError = error as AxiosError<{ error: string }>; 
//     if (axiosError.response?.data) {
//       throw new Error(axiosError.response.data.error);
//     } else {
//       throw new Error("An error occurred");
//     }
//   }
// };


export const closeOpportunity = async (payload: {}, id: number) => {
  console.log(payload);
  return await axios({
    method:"PUT",
    url:`${API_BASE_URL}/close_opportunity/${id}`,
    data:payload,
    headers: {'Authorization':`Bearer ${storage.getToken()}`}
  })
  
}

export { login, createUser };

