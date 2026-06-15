import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type TPatients } from "@/shared/types/TPatients";
import { EStoreStatus } from "@/shared/types/EStoreStatus";
import { fetchPatients } from "./actions";

type TPatienceSliceState = {
  patients: TPatients[];
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
      (state, action: PayloadAction<TPatients[]>) => {
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
