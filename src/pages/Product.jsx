import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import Stars from "../components/Stars";
import { ReactComponent as CartIcon } from "../assets/CartIcon.svg";
import { CartContext } from "../Cartcontext";
import LoadAnimation from "../components/LoadAnimation";
import { Link } from "react-router-dom";
const Product = () => {
  const [Product, setProduct] = useState({});
  const [Loading, setLoading] = useState(true);
  const { dispatch, Cart } = useContext(CartContext);
  const [MainImgUrl, setMainImgUrl] = useState("");
  const mainImg = useRef();
  const handleImage = (img) => {
    setMainImgUrl(img);
  };

  let { id } = useParams();
  useEffect(() => {
    fetch(`https://gaveit-api.herokuapp.com/gaveit/product?asin=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMainImgUrl(data.product.main_image);
        setProduct(data);
        setLoading(false);
      });
  }, []);

  const handleClick = (e) => {
    e.target.parentNode.classList.add("filter");
    e.target.parentNode.classList.add("invert");
    e.target.innerText = "Added to cart";
    let newData = {
      id: id,
      title: Product.product.title,
      img: MainImgUrl,
      rating: Product.product.reviews.rating,
      total_reviews: Product.product.reviews.total_reviews,
      current_price: Product.product.price.current_price,
      before_price: Product.product.price.before_price
    };
    dispatch({ type: "AddToCart", item: newData });
  };
  return (
    <>
      {Loading ? <LoadAnimation /> : null}
      <div className="container mx-auto flex space-x-6 p-5 flex-col lg:flex-row justify-between">
        {Object.keys(Product).length ? (
          <>
            <div>
              <div
                className={
                  Loading
                    ? "hidden flex md:w-auto w-full flex-col flex-col-reverse space-y-6 space-y-reverse md:space-y-0 md:flex-row md:space-x-6 items-center justify-center"
                    : "flex md:w-auto w-full flex-col flex-col-reverse space-y-6 space-y-reverse md:space-y-0 md:flex-row md:space-x-6 items-center justify-center"
                }
              >
                <div className="flex  flex-row space-x-2 md:space-x-0 md:flex-col md:space-y-2 items-center justify-start md:overflow-y-auto overflow-x-auto w-full md:w-auto md:h-96">
                  {Product.product.images.map((img, i) => (
                    <div
                      className="cursor-pointer w-24 h-24 rounded-lg shadow-md relative"
                      style={{ minHeight: "6rem", minWidth: "6rem" }}
                    >
                      <img
                        className="absolute transform  -translate-x-1/2 inset-x-1/2 w-auto h-full object-cover"
                        src={img}
                        alt=""
                        onClick={() => handleImage(img)}
                      />
                    </div>
                  ))}
                </div>
                <div className="shadow-md h-96 w-96 rounded-lg relative">
                  <img
                    ref={mainImg}
                    className="absolute transform  -translate-x-1/2 inset-x-1/2 w-auto h-full object-cover"
                    src={MainImgUrl}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col space-y-8 items-start justify-start min-w-min">
              <div className="flex flex-col space-y-4 items-start justify-start">
                <p className="text-2xl font-semibold leading-loose text-gray-800 max-w-lg">
                  {Product.product.title}
                </p>
                <div className="flex items-start justify-start w-full">
                  <div className="flex space-x-5 items-center justify-between">
                    <Stars rating={Product.product.reviews.rating} />
                    <p className="text-xs font-semibold leading-none text-gray-400">
                      {Product.product.reviews.total_reviews} reviews
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex space-x-6 items-start justify-start">
                <div className="w-1/5 h-full bg-gray-300 rounded-lg"></div>
                <div className="w-1/5 h-full bg-gray-300 rounded-lg"></div>
                <div className="w-1/5 h-full bg-gray-300 rounded-lg"></div>
                <div className="w-1/5 h-full bg-gray-300 rounded-lg"></div>
              </div>
              <div className="flex flex-col space-y-2 items-start justify-start">
                <p className="text-xl font-bold leading-7 text-gray-800">
                  About this item
                </p>
                <p className="text-base leading-normal text-gray-800 w-96">
                  <ul className="space-y-2">
                    {Product.product.feature_bullets
                      .slice(0, 4)
                      .map((point, i) => (
                        <li className="line-clamp-2">{point}</li>
                      ))}
                  </ul>
                </p>
              </div>
              <div className="inline-flex space-x-4 items-center justify-start w-80">
                <p className="text-3xl font-bold leading-9 text-gray-800">
                  Rs{" "}
                  {Product.product.price.current_price
                    ? Product.product.price.current_price
                    : "unavailable"}
                </p>
                <p className="text-xl font-bold leading-7 line-through text-gray-500">
                  Rs {Product.product.price.before_price}
                </p>
              </div>
              <div className="inline-flex space-x-6 items-start justify-start">
                <Link
                  to="/order"
                  className="flex transform transition hover:scale-110 duration-200 items-center justify-center px-6 py-3 bg-yellow-500 rounded-lg"
                >
                  <p className="text-lg font-medium leading-7 text-gray-800">
                    Buy Now
                  </p>
                </Link>
                <div className="flex transform transition hover:scale-110 duration-200 space-x-2 items-center justify-center px-6 py-3 border rounded-lg border-gray-800 ">
                  <CartIcon />
                  <p
                    onClick={handleClick}
                    className="text-lg font-medium leading-7 text-gray-800"
                  >
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Product;
