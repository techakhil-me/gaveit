import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const CardContainer = ({ category, Loading, setLoading }) => {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch(
      `https://gaveit-api.herokuapp.com/gaveit/search?keyword=${category.replace(
        " ",
        "%20"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCards(data["result"].slice(3));
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto flex py-5 flex-col items-start justify-start">
      <div className="inline-flex w-full items-center justify-between">
        <p className="text-xl font-bold leading-7 text-gray-800">{category}</p>
        <p className="text-xl font-medium leading-7 text-gray-500">View all</p>
      </div>
      <div className="flex py-2 space-x-4 items-start justify-start overflow-x-auto w-full">
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
  );
};

export default CardContainer;
