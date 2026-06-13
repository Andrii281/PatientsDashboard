import { useDispatch } from "react-redux";

import { type TAppDispatch } from "@/store/store";

export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
