
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const sliderApi = createApi({
    reducerPath: 'sliderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1000/' }),
    endpoints: (builder) => ({
        getAllSlider: builder.query({ 
            query:()=>"slider/getSlider"
        })
    })
    
})

export const { useGetAllSliderQuery } = sliderApi;