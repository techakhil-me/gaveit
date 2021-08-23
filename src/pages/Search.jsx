import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import LoadAnimation from "../components/LoadAnimation";

const Search = () => {
  const [Cards, setCards] = useState([]);
  const [Loading, setLoading] = useState(true);
  let { keyword } = useParams();
  useEffect(() => {
    setLoading(true)
    fetch(
      `https://gaveit-api.herokuapp.com/gaveit/search?keyword=${keyword.replace(
        " ",
        "%20"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCards([]);
        setCards(data["result"].slice(3));
        setLoading(false)
      });
  }, [keyword]);
  return (<>
  {Loading ? <LoadAnimation /> : null}
    <div className={Loading?"hidden":"container mx-auto p-5 space-y-2"}>
      <p className="text-3xl font-bold leading-9 text-gray-800">{keyword}</p>
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="inline-flex lg:col-span-3 flex-col space-y-2 items-start justify-start w-full">
          <form>
            <p className="text-lg font-semibold leading-7 text-gray-800">
              sort
            </p>
            <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
              <input type="radio" id="lowtohigh" name="radio" value="1" />
              <label
                for="lowtohigh"
                className="text-lg font-medium leading-7 text-gray-800"
              >
                low to high
              </label>
            </div>
            <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
              <input type="radio" id="hightolow" name="radio" value="1" />
              <label
                for="hightolow"
                className="text-lg font-medium leading-7 text-gray-800"
              >
                high to low
              </label>
            </div>
          </form>
          <form>
            <p className="text-lg font-semibold leading-7 text-gray-800">
              filter
            </p>
            <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
              <input type="radio" id="5stars" name="radio" value="1" />
              <label
                for="5stars"
                className="text-lg font-medium leading-7 text-gray-800"
              >
                5 stars
              </label>
            </div>
            <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
              <input type="radio" id="4stars" name="radio" value="1" />
              <label
                for="4stars"
                className="text-lg font-medium leading-7 text-gray-800"
              >
                4 stars
              </label>
            </div>
            <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
              <input type="radio" id="3stars" name="radio" value="1" />
              <label
                for="3stars"
                className="text-lg font-medium leading-7 text-gray-800"
              >
                3 stars
              </label>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap space-y-6 items-center justify-between lg:col-span-9">
          {Cards.map((product, i) => (
            <ProductCard
              title={product.title}
              thumbnail={product.thumbnail}
              current_price={product.price.current_price}
              before_price={product.price.before_price}
              total_reviews={product.reviews.total_reviews}
              rating={product.reviews.rating}
              asin={product.asin}
              key={product.asin}
            />
          ))}
        </div>
      </div>
    </div>
 </> );
};

export default Search;
