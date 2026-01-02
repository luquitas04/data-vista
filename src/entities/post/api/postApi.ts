//#region imports
import { baseApi } from "../../../shared/api/baseApi";
import type { Post } from "../model/types";
//#endregion

//#region api
export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostsByUser: builder.query<Post[], number>({
      query: (userId) => `/posts?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Post" as const, id })),
              { type: "Post", id: `USER_${userId}` },
            ]
          : [{ type: "Post", id: `USER_${userId}` }],
    }),
  }),
});
//#endregion

//#region hooks
export const { useGetPostsByUserQuery } = postsApi;
//#endregion
