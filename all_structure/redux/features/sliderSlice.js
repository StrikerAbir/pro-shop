import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1000/" }),
  refetchOnMountOrArgChange: 1,
  endpoints: (builder) => ({
    //for get all slider
    getAllSlider: builder.query({
      query: () => "slider/getSlider",
    }),

    // insert one slider
    addSlider: builder.mutation({
      query: (payload) => ({
        url: "slider/addSlider",
        method: "POST",
        body: payload,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),

    // get all categories
    getAllCategories: builder.query({
      query: () => "categories/getCategories",
    }),

    //get single categories product
    getCatProducts: builder.query({
      query: (payload) => `products/getProducts/${payload}`,
    }),

    //get  product details
    getProductDetails: builder.query({
      query: (payload) => `products/getProductDetails/${payload}`,
    }),
    
  }),
});

export const {
  useGetAllSliderQuery,
  useAddSliderMutation,
  useGetAllCategoriesQuery,
    useGetCatProductsQuery,
  useGetProductDetailsQuery
} = sliderApi;
