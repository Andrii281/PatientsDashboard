import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { appRouter } from "@/router/appRouter";
import { store } from "@/store/store";

export const Providers = () => {
  return (
    <StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={appRouter} />
      </ReduxProvider>
    </StrictMode>
  );
};
