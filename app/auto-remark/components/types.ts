import { ReactNode } from "react";

import {
  AutoRemarkCount,
  AutoRemarkDate,
  AutoRemarkResponse,
  AutoRemarkUser,
  HandleRemarkUpdate,
} from "../hooks";

export type RootProps = {
  children: ReactNode;
};
export type DescriptionProps = {
  date: AutoRemarkDate;
  count: AutoRemarkCount;
};
export type ActionProps = {
  loading: AutoRemarkResponse["loading"];
  handleClick: HandleRemarkUpdate;
};
export type TableProps = {
  loading: AutoRemarkResponse["loading"];
  isDirty: AutoRemarkResponse["called"];
  data: AutoRemarkUser;
};
