import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
   
     const myLoader = ({ src, width, quality }) => {
       return `${src}?w=${width}&q=${quality || 75}`;
     };
    return (
      <div className="card card-compact  bg-base-100 rounded-lg shadow-xl">
        <Image
          loader={myLoader}
          src={product.image}
          alt="Picture of the author"
          width={490}
          height={490}
          className="border-4 border-warning"
        />

        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{product.title}</h2>
            <div>
              <p className="font-semibold">Price: ${product.original_price}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Location: {product.location}</p>
            </div>
            <div>
              <p className="font-semibold">Condition: {product.product_condition}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link
             href={`productdetails/${product._id}`}
              className="btn bg-primary hover:bg-primary hover:bg-opacity-70 text-neutral border-none rounded-sm w-full"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;