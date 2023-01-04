import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserModel } from './UserModel'

export const API = createApi({
    reducerPath: 'API',
    refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
  }),
  refetchOnFocus: true,
  tagTypes: ['Properties', 'Users', 'Agents', 'Companies'],
    endpoints: (builder) => ({
       getUsers: builder.query<UserModel, void>({
        query: ()  => '/users', 
         providesTags: (result, error, id: any) =>  [{ type:'Users', id }], 
      }),
    
      getUser: builder.query<UserModel, any>({
        query: (id) => `/users/${id}`,
        providesTags: (result, error, id: any) =>  [{ type:'Users', id }],  
      }),
    })
})
export const { 
    useGetUsersQuery,
    useGetUserQuery, 
} = API