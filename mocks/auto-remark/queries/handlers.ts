import { HttpResponse, http } from "msw";

import { studentNumbers } from "./mock";

export const autoRemarkQueries = {
  getPauseStudentIds: http.get("getPauseStudentIds", () => {
    return HttpResponse.json([...studentNumbers]);
  }),
  getStudentLectureList: http.get(
    "getStudentLectureList/:userNo",
    ({ params }) => {
      console.log("getStudentLectureList");
      console.log(params.userNo);
      //TODO: add return value
    },
  ),
};
