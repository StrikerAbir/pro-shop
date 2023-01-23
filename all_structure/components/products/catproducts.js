import SingleProduct from "./SingleProuduct/SingleProduct";


const CatProducts = ({products}) => {
    return (
      <div className="mt-16 mb-10 ">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">Our Collection</p>
          <h2 className="text-5xl font-semibold"> Dive Into Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </div>
      </div>
    );
};

export default CatProducts;