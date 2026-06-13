import { type IPatient } from "@/types/IPatient";
import { EStoreStatus } from "@/types/EStoreStatus";
import { createSlice } from "@reduxjs/toolkit";

import { fetchPatients } from "./actions";

type TPatienceSliceState = {
  patients: IPatient[];
  status: EStoreStatus;
};

const initialState: TPatienceSliceState = {
  patients: [],
  status: EStoreStatus.Idle,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatients.pending, (state) => {
      state.status = EStoreStatus.Loading;
    });
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      state.status = EStoreStatus.Success;
      state.patients = action.payload;
    });
    builder.addCase(fetchPatients.rejected, (state) => {
      state.status = EStoreStatus.Error;
    });
  },
});

export const patientsReducer = patientsSlice.reducer;
