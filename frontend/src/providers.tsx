import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import { StoreProvider } from "@/contexts/store/provider";
import { appRouter } from "@/router/appRouter";

export const Providers = () => {
  return (
    <StrictMode>
      <StoreProvider>
        <RouterProvider router={appRouter} />
      </StoreProvider>
    </StrictMode>
  );
};
