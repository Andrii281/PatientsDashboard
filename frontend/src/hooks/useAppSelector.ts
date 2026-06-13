import { useSelector } from "react-redux";

import { type TStoreState } from "@/store/store";

export const useAppSelector = useSelector.withTypes<TStoreState>();
