import { HttpResponse, http } from "msw";

import * as MOCK from "./mock";

export const querySlice = [
  http.get("getPauseStudentIds", () => {
    return HttpResponse.json(MOCK.USER_INFO);
  }),
  http.get("getStudentLectureList/:userNo", () => {
    return HttpResponse.json(MOCK.LECTURE_INFO[getRandomInt()]);
  }),
];

const getRandomInt = (min = 0, max = 2): number => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
