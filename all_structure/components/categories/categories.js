import React from 'react';

const Categories = () => {
    return (
      <div className="mt-16 mb-10 ">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">Products in Sale</p>
          <h2 className="text-5xl font-semibold"> Dive Into Olds</h2>
        </div>
        {/* {products ? (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2">
            {products.map((product) => (
              <SingleCard key={product._id} product={product}></SingleCard>
            ))}
          </div>
        ) : (
          <Loading></Loading>
        )} */}
      </div>
    );
};

export default Categories;