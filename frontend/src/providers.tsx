import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { appRouter } from "@/router/appRouter";
import { store } from "@/store/store";

export const Providers = () => {
  return (
    // <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={appRouter} />
    </ReduxProvider>
    // </React.StrictMode>
  );
};
