import { mutationSlice } from "./mutationSlice";
import { querySlice } from "./querySlice";

export const autoRemarkHandlers = [...querySlice, ...mutationSlice];
