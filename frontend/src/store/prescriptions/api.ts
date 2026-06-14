import type { TPrescriptions } from "@/types/TPrescriptions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const prescriptionsApi = createApi({
  reducerPath: "prescriptionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    fetchPrescriptionsByAdmissionId: builder.query<TPrescriptions[], string>({
      query: (admissionId: string) => ({
        url: `prescriptions?admissionId=${admissionId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchPrescriptionsByAdmissionIdQuery } = prescriptionsApi;
