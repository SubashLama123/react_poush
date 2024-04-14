import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }),
  endpoints: (builder) => ({

    getFoodCategory: builder.query({
      query: (user) => ({
        url: '/categories.php',
        method: 'GET'
      }),

    }),

    getFoodByCategory: builder.query({
      query: (category) => ({
        url: '/filter.php',
        params: {
          c: category
        },
        method: 'GET'
      }),

    }),

    getFoodDetail: builder.query({
      query: (id) => ({
        url: '/lookup.php',
        params: {
          i: id
        },
        method: 'GET'
      }),

    }),

  })

});


export const { useGetFoodByCategoryQuery, useGetFoodDetailQuery, useGetFoodCategoryQuery } = mealApi;