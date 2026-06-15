import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type TPatient } from "@/shared/types/TPatient";
import { EStoreStatus } from "@/shared/types/EStoreStatus";
import { fetchPatients } from "./actions";

type TPatienceSliceState = {
  patients: TPatient[];
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
      state.status = EStoreStatus.Pending;
    });
    builder.addCase(
      fetchPatients.fulfilled,
      (state, action: PayloadAction<TPatient[]>) => {
        state.status = EStoreStatus.Success;
        state.patients = action.payload;
      }
    );
    builder.addCase(fetchPatients.rejected, (state) => {
      state.status = EStoreStatus.Error;
    });
  },
});

export const patientsReducer = patientsSlice.reducer;
