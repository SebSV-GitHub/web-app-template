import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type Token from "../types/token";
import type Credentials from "../types/credentials";
import type Post from "../types/post.js";
import type { RootState } from "../state/store.js";

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080/api/",
		prepareHeaders(headers, { getState }) {
			const token = (getState() as RootState).auth.token;

			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["post"],
	endpoints: (build) => ({
		authenticate: build.mutation<Token, Credentials>({
			query: (credentials) => ({
				url: "authentications",
				method: "POST",
				body: credentials,
				responseHandler: "content-type",
			}),
		}),
		getPosts: build.query<Post[], void>({
			query: () => ({
				url: "posts",
				responseHandler: "content-type",
			}),
			providesTags: ["post"],
		}),
		postPost: build.mutation<void, Omit<Post, "id">>({
			query: (arg) => ({
				url: "posts",
				method: "POST",
				body: arg,
				responseHandler: "content-type",
			}),
			invalidatesTags: ["post"],
		}),
	}),
});

export default api;
export const {
	useAuthenticateMutation,
	useGetPostsQuery,
	usePostPostMutation,
} = api;
