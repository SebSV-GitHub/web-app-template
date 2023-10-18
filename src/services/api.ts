import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type Token from "../types/token";
import type Credentials from "../types/credentials";

const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
	endpoints(build) {
		return {
			authenticate: build.mutation<Token, Credentials>({
				query: (credentials) => ({
					url: "authentications",
					method: "POST",
					body: credentials,
				}),
			}),
		};
	},
});

export default api;
export const { useAuthenticateMutation } = api;
