import api from "./base";

export const loginApi = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/signin", payload);
    return response.data.content;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const signUpApi = async (payload: {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
}) => {
  try {
    const response = await api.post("/auth/signup", payload);
    return response.data.content;
  } catch (error: any) {
    throw error.response.data;
  }
};
