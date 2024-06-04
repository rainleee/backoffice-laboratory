import { useWriteRemarkMutation } from "@/graphql/mutations/auto-remark/writeRemark.graphql";

import { AutoRemarkMutationType, UserInfo } from "./types";

export const useAutoRemarkMutation = () => {
  const [writeRemark] = useWriteRemarkMutation();

  const writeRemarkMutation = async (
    userId: number,
    type: AutoRemarkMutationType,
  ): Promise<UserInfo> => {
    try {
      const { data } = await writeRemark({
        variables: {
          input: {
            userId,
            content: type === "init" ? "" : "테스트 특이사항 추가",
          },
        },
      });

      const userInfo = {
        id: userId,
        status: "✅",
        link: `${userId}`, //TODO: change
        error: "",
      };

      if (!data?.writeRemark) {
        return {
          ...userInfo,
          status: "❌",
          error: `error code : `, //TODO: change
        };
      }

      return userInfo;
    } catch (error) {
      const errors = JSON.parse(JSON.stringify(error));
      console.log(errors);

      return {
        id: userId,
        status: "❌",
        link: `${userId}`, //TODO: change
        error: `error code : 404 not found`,
      };
    }
  };

  return { writeRemarkMutation };
};
