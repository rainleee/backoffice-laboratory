import { MouseEventHandler } from "react";

export interface UserInfo {
  id: number;
  status: string;
  link: string;
  error: string;
}

export type AutoRemarkMutationType = "init" | "dummy";

export type Predicate<T> = {
  key: keyof T;
  matched: T[keyof T];
};

export interface AutoRemarkResponse {
  data: {
    user: UserInfo[];
    count: {
      total: number;
      status: number;
    };
    date: {
      start: string;
      end: string;
    };
  };
  loading: boolean;
  error: string;
  called: boolean;
}

type Data = AutoRemarkResponse["data"];

export type AutoRemarkDate = Data["date"];
export type AutoRemarkCount = Data["count"];
export type AutoRemarkUser = Data["user"];

export type HooksAutoRemarkHandler = () => [
  MouseEventHandler<HTMLButtonElement>,
  AutoRemarkResponse,
];
export type HandleRemarkUpdate = MouseEventHandler<HTMLButtonElement>;
