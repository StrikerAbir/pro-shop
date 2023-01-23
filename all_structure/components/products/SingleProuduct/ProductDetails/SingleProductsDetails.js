import Image from "next/image";


const SingleProductsDetails = ({ product }) => {
     const {
       image,
       title,
       location,
       resale_price,
       original_price,
       years_of_use,
       product_condition,
       post_time,
       seller_name,
       seller_phone,
       seller_email,
       description,
    } = product[0];
    
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`;
    };
    return (
      <div>
        <div className="mt-16 mb-10">
          <section>
            <div className="text-center mb-10">
              <p className="text-2xl font-bold text-primary">Product Details</p>
              <h2 className="text-5xl font-semibold">{title} </h2>
            </div>
            <div>
              <div className="card lg:card-side bg-base-100 mx-3 rounded-none">
                <Image
                  loader={myLoader}
                  src={image}
                  alt="Picture of the author"
                  width={490}
                  height={490}
                  className="border-4 border-warning"
                />
                <div className="flex justify-center items-center lg:w-1/2">
                  <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <div>
                      <p>
                        <span className="font-bold">Description: </span>
                        {description}
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-2">
                        <span className="font-bold">Location:</span> {location}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Resale price:</span> $
                        {resale_price}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Original price:</span> $
                        {original_price}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Years of use:</span>{" "}
                        {years_of_use}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Product condition:</span>{" "}
                        {product_condition}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Post time:</span>{" "}
                        {post_time}
                      </p>
                      <p>
                        <span className="font-bold">Seller name: </span>{" "}
                        {seller_name}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Seller phone:</span>{" "}
                        {seller_phone}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold">Seller email:</span>{" "}
                        {seller_email}
                      </p>
                      <div className="my-4">
                       <button className="btn btn-primary">Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default SingleProductsDetails;