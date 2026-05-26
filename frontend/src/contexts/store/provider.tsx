import { type PropsWithChildren } from "react";

import { StoreConext } from "./store";
import { RootStore } from "@/stores/rootStore";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const rootStore = new RootStore();

  return (
    <StoreConext.Provider value={rootStore}>{children}</StoreConext.Provider>
  );
};
