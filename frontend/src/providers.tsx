import { type PropsWithChildren, StrictMode } from "react";

import { StoreProvider } from "@/contexts/store/provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StrictMode>
      <StoreProvider>{children}</StoreProvider>
    </StrictMode>
  );
};
