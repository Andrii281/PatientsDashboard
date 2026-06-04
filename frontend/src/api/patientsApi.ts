import { type IPatient } from "@/types/IPatient";

const BASE_URL = import.meta.env.VITE_API_URL;

export const patientsApi = {
  getAll: async (): Promise<IPatient[]> => {
    const response = await fetch(`${BASE_URL}/patients`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    return response.json();
  },
};
