export const useAutoRemarkQuery = () => {
  const getPauseStudentIds = async () => {
    try {
      const response = await fetch("getPauseStudentIds");
      const data = await response.json();

      const studentNumbers: number[] = Array.from(
        new Set(
          data.response.map((obj: any) => {
            return (obj as any).userNo;
          }),
        ),
      );

      return {
        studentNumbers,
        date: {
          start: data.response[0].submitDate,
          end: data.response[data.response.length - 1].submitDate,
        },
        total: studentNumbers.length,
      };
    } catch (error) {
      console.error(error);
    }
  };

  const getStudentLectureList = async (userNo: number) => {
    try {
      console.log(userNo);

      // const { data } = await fetch(`getStudentLectureList/${userNo}`);
      // return { lecture_info: data.lecture_info ?? [] };
    } catch (error) {
      console.error(error);
    }
  };

  return { getPauseStudentIds, getStudentLectureList };
};
