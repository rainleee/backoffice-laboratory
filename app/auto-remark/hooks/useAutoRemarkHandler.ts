import { useState } from "react";

import {
  AutoRemarkMutationType,
  HandleRemarkUpdate,
  HooksAutoRemarkHandler,
  Predicate,
  AutoRemarkResponse,
  UserInfo,
} from "./types";
import { useAutoRemarkQuery } from "./useAutoRemarkQuery";
import { useAutoRemarkMutation } from "./useAutoRemarkMutation";

export const useAutoRemarkHandler: HooksAutoRemarkHandler = () => {
  const { getPauseStudentIds, getStudentLectureList } = useAutoRemarkQuery();
  const { writeRemarkMutation } = useAutoRemarkMutation();

  const [response, setResponse] = useState<AutoRemarkResponse>({
    data: {
      user: [],
      count: {
        total: 0,
        status: 0,
      },
      date: {
        start: "",
        end: "",
      },
    },
    loading: false,
    error: "",
    called: false,
  });

  const isEveryPredicate = <T>(arr: T[], predicate: Predicate<T>): boolean =>
    arr.every((obj) => obj && obj[predicate.key] === predicate.matched);

  const handleAutoRemarkMutation = async (
    userNo: number,
    type: AutoRemarkMutationType,
  ) => {
    try {
      const res = await getStudentLectureList(userNo);
      // console.log("handleAutoRemarkMutation res");
      // console.log(res);
      // console.log(res?.lecture_info);

      if (!res?.lecture_info) throw new Error("lecture_info is null");

      const isFinished = isEveryPredicate(res.lecture_info as any, {
        key: "tutoring_state",
        matched: "FINISH",
      });

      // console.log("isFinished");
      // console.log(isFinished);

      if (isFinished) return await writeRemarkMutation(userNo, type);
    } catch (error) {
      const errors = JSON.parse(JSON.stringify(error));
      //TODO: error 핸들링이 전체적으로 되어있지 않음
      setResponse((prev) => ({
        ...prev,
        error: `error code : ${errors.status}`,
      }));
    } finally {
      setResponse((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleRemarkUpdate: HandleRemarkUpdate = async (event) => {
    setResponse((prev) => ({
      ...prev,
      loading: true,
      called: true,
    }));
    const { studentNumbers, total, date } = await getPauseStudentIds();

    const type = (event.target as HTMLButtonElement)
      .value as AutoRemarkMutationType;

    const remarkUpdatedList = await Promise.allSettled(
      studentNumbers.map((userNo) => handleAutoRemarkMutation(userNo, type)),
    );
    const updateUsers = remarkUpdatedList
      .filter(
        (result): result is PromiseFulfilledResult<UserInfo> =>
          result.status === "fulfilled" && Boolean(result.value),
      )
      .map(({ value }) => value);

    setResponse((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        user: updateUsers,

        count: {
          total,
          status: updateUsers.length,
        },
        date,
      },
    }));
  };

  return [handleRemarkUpdate, response];
};
