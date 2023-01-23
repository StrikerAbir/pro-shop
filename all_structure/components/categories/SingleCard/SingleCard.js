import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleCard = ({ category }) => {
    console.log(category);
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`;
    };
    return (
      <div
        className="card card-compact  bg-base-100 rounded-lg shadow-xl"
      >
        <Image
          loader={myLoader}
          src={category.image}
          alt="Picture of the author"
          width={490}
          height={490}
          className="border-4 border-warning"
        />

        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{category.category_name}</h2>
          </div>
          <div className="card-actions">
            <Link
              href={`/products/${category.category_id}`}
              className="btn bg-primary hover:bg-primary hover:bg-opacity-70 text-neutral border-none rounded-sm w-full"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleCard;