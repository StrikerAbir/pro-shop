import React from 'react';
import { useGetAllCategoriesQuery } from '../../redux/features/sliderSlice';
import SingleCard from './SingleCard/SingleCard';

const Categories = () => {
    const {
      data: categories,
      error,
      isError,
      isLoading,
      refetch,
    } = useGetAllCategoriesQuery();
    console.log(categories);
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="mt-16 mb-10 ">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">Categories We Have</p>
          <h2 className="text-5xl font-semibold"> Dive Into Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2">
            {categories.map((category) => (
              <SingleCard key={category._id} category={category}></SingleCard>
            ))}
          </div>
      </div>
    );
};

export default Categories;