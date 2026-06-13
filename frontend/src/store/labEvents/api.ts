import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const labEventsApi = createApi({
  reducerPath: "labEventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    fetchLabEventsByAdmissionId: builder.query({
      query: (admissionId: string) => ({
        url: `lab-events?admissionId=${admissionId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchLabEventsByAdmissionIdQuery } = labEventsApi;
