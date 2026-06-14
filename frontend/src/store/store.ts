import { configureStore } from "@reduxjs/toolkit";

import { patientsReducer } from "./patients/slice";
import { labEventsApi } from "./labEvents/api";
import { prescriptionsApi } from "./prescriptions/api";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    [labEventsApi.reducerPath]: labEventsApi.reducer,
    [prescriptionsApi.reducerPath]: prescriptionsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware()
      .concat(labEventsApi.middleware)
      .concat(prescriptionsApi.middleware),
});

export type TStoreState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
