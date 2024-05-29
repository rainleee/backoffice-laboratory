import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

type WriteRemarkInput = {
  content: Scalars["String"];
  userId: Scalars["Int"];
};

type WriteRemarkMutationVariables = Exact<{
  input: WriteRemarkInput;
}>;

type WriteRemarkMutation = {
  __typename?: "Mutation";
  writeRemark: boolean;
};

const WriteRemarkDocument = gql`
  mutation writeRemark($input: WriteRemarkInput!) {
    writeRemark(input: $input)
  }
`;

const defaultOptions = {} as const;

/**
 * __useWriteRemarkMutation__
 *
 * To run a mutation, you first call `useWriteRemarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWriteRemarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [writeRemarkMutation, { data, loading, error }] = useWriteRemarkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWriteRemarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    WriteRemarkMutation,
    WriteRemarkMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<WriteRemarkMutation, WriteRemarkMutationVariables>(
    WriteRemarkDocument,
    options,
  );
}
