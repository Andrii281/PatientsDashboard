import { createContext, useContext } from "react";
import { RootStore } from "@/stores/rootStore";

export const StoreConext = createContext<RootStore>({} as RootStore);

export const useStore = () => {
  return useContext(StoreConext);
};
