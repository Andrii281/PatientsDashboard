import { configureStore } from "@reduxjs/toolkit";

import { patientsReducer } from "./patients/slice";
import { labEventsApi } from "./labEvents/api";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    [labEventsApi.reducerPath]: labEventsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(labEventsApi.middleware),
});

export type TStoreState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
