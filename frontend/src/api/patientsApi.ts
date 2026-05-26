import { type IGetAllPatientsDto } from "../dtos/IGetAllPatientsDto";

const BASE_URL = import.meta.env.VITE_API_URL;

export const patientsApi = {
  getAll: async (): Promise<IGetAllPatientsDto> => {
    const response = await fetch(`${BASE_URL}/patients`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    return response.json();
  },
};
