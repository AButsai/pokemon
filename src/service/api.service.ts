import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_BASE_URL,
})

export const api = createApi({
	tagTypes: ['pokemon'],
	baseQuery,
	endpoints: () => ({}),
})
