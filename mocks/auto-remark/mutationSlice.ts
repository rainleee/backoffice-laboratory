import { HttpResponse, graphql } from "msw";

export const mutationSlice = [
  graphql.mutation("writeRemark", ({ query, variables }) => {
    return HttpResponse.json({
      data: {
        writeRemark: true,
      },
    });
  }),
];
