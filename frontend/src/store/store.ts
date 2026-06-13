import { configureStore } from "@reduxjs/toolkit";

import { patientsReducer } from "./patients/slice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export type TStoreState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
