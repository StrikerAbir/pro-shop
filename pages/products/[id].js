import { useRouter } from 'next/router';
import React from 'react';
import CatProducts from '../../all_structure/components/products/catproducts';
import { useGetCatProductsQuery } from '../../all_structure/redux/features/sliderSlice';

const Products = () => {
    const router = useRouter();
    const category_id = router.query.id;
    // console.log(category_id);
    const {
      data: products,
      error,
      isError,
      isLoading,
      refetch,
    } = useGetCatProductsQuery(category_id);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <CatProducts products={products}></CatProducts>
        </div>
    );
};

export default Products;