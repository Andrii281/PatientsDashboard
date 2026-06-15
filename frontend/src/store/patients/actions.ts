import { createAsyncThunk } from "@reduxjs/toolkit";

import { patientsApi } from "@/api/patientsApi";
import { type TPatients } from "@/shared/types/TPatients";
import { UNEXPECTED_ERROR_MESSAGE } from "@/constants/unexpectedErrorMessage";

export const fetchPatients = createAsyncThunk<
  TPatients[],
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
