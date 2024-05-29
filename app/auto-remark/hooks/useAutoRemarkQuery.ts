export const useAutoRemarkQuery = () => {
  const getPauseStudentIds = async () => {
    try {
      const response = await fetch("getPauseStudentIds");
      const data = await response.json();

      const studentNumbers: number[] = Array.from(
        new Set(
          data.map((obj: any) => {
            return obj.userNo;
          }),
        ),
      );

      return {
        studentNumbers,
        date: {
          start: data[0].submitDate,
          end: data[data.length - 1].submitDate,
        },
        total: studentNumbers.length,
      };
    } catch (error) {
      console.error(error);
      return {
        studentNumbers: [],
        date: {
          start: "",
          end: "",
        },
        total: 0,
      };
    }
  };

  const getStudentLectureList = async (userNo: number) => {
    try {
      const res = await fetch(`getStudentLectureList/${userNo}`);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      return { lecture_info: data ?? [] };
    } catch (error) {
      console.error(error);
    }
  };

  return { getPauseStudentIds, getStudentLectureList };
};
