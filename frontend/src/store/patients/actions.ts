import { createAsyncThunk } from "@reduxjs/toolkit";

import { patientsApi } from "@/api/patientsApi";
import { type TPatient } from "@/types/TPatient";
import { UNEXPECTED_ERROR_MESSAGE } from "@/constants/unexpectedErrorMessage";

export const fetchPatients = createAsyncThunk<
  TPatient[],
  void,
  { rejectValue: string }
>("patients/fetchPatients", async (_, { rejectWithValue }) => {
  try {
    return await patientsApi.getAll();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : UNEXPECTED_ERROR_MESSAGE
    );
  }
});
