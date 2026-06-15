import { type TPatient } from "@/shared/types/TPatients";

const BASE_URL = import.meta.env.VITE_API_URL;

export const patientsApi = {
  getAll: async (): Promise<TPatient[]> => {
    const response = await fetch(`${BASE_URL}/patients`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    return response.json();
  },
};
