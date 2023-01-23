import { useRouter } from "next/router";
import SingleProductsDetails from "../../../all_structure/components/products/SingleProuduct/ProductDetails/SingleProductsDetails";
import { useGetProductDetailsQuery } from "../../../all_structure/redux/features/sliderSlice";




const ProductDetails = () => {
    
    const router = useRouter()
    const product_id = router.query.id;
    // console.log(product_id);
    const {
      data: product,
      error,
      isError,                                
      isLoading,
      refetch,
    } = useGetProductDetailsQuery(product_id);
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <SingleProductsDetails product={product} />
        </div>
    );
};

export default ProductDetails;