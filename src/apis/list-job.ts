import api from "./base";


  
  export const listjobApi = async () => {
    try {
      const response = await api.get("/loai-cong-viec");
      console.log(response.data)
      return response.data.content;
    } catch (error: any) {
      throw error.response;
    }
  };