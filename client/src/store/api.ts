import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7120'
    }),
    tagTypes: [],
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data) => ({
                url: "/api/account/login",
                method: "POST",
                body: data,
                headers: {
                "Content-Type": "application/json",
                },
            }),
        }),
    })
})

export const { 
    useLoginUserMutation
} = api