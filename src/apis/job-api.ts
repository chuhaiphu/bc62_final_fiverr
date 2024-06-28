import api from "./base";

export const getAllJobsApi = async () => {
  try {
    const response = await api.get("/cong-viec");
    return response.data.content;
  } catch (error: any) {
    throw error.response.data;
  }
}

export const getAllJobTypesApi = async () => {
  try {
    const response = await api.get("/loai-cong-viec");
    return response.data.content;
  } catch (error: any) {
    throw error.response.data;
  }
}

export const getAllServicesApi = async () => {
  try {
    const response = await api.get("/thue-cong-viec");
    return response.data.content;
  } catch (error: any) {
    throw error.response.data;
  }
}