import { HttpResponse, http } from "msw";

import { LECTURE_DUMMY, studentNumbers } from "./mock";

export const autoRemarkQueries = {
  getPauseStudentIds: http.get("getPauseStudentIds", () => {
    return HttpResponse.json([...studentNumbers]);
  }),
  getStudentLectureList: http.get("getStudentLectureList/:userNo", () => {
    return HttpResponse.json(LECTURE_DUMMY[getRandomInt()]);
  }),
};

const getRandomInt = (min = 0, max = 2): number => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);

  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
