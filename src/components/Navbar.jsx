import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as AccountIcon } from "../assets/AccountIcon.svg";
import { ReactComponent as LikeIcon } from "../assets/LikeIcon.svg";
import { ReactComponent as CartIcon } from "../assets/CartIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../Cartcontext";

const Navbar = () => {
  const [Keyword, setKeyword] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${Keyword}`);
  };

  const { Cart, dispatch } = useContext(CartContext);
  useEffect(() => {
    dispatch({ type: "LoadCart" });
  }, []);

  return (
    <header className="text-gray-600 body-font antialiased">
      <div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row lg:space-y-0 space-y-2 items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </Link>
        <nav className="lg:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap lg:space-y-0 space-y-2 items-center text-base font-bold leading-normal text-gray-800 justify-center">
          <Link
            to="/search/Today's Deals"
            className="cursor-pointer transition duration-300 mr-5 px-4 py-2 rounded-lg hover:bg-yellow-100"
          >
            Today's Deals
          </Link>
          <Link
            to="/search/Trending"
            className="cursor-pointer transition duration-300 mr-5 px-4 py-2 rounded-lg hover:bg-yellow-100"
          >
            Trending Deals
          </Link>
          <Link
            to="/search/Special Offers"
            className="cursor-pointer transition duration-300 mr-5 px-4 py-2 rounded-lg hover:bg-yellow-100"
          >
            Special Offers
          </Link>
          {/* <Link className="cursor-pointer mr-5 px-4 py-2 rounded-lg hover:bg-yellow-100">Fourth Link</Link> */}
        </nav>
        <div className="inline-flex space-x-4 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex cursor-pointer space-x-2 items-center justify-between w-40 px-4 py-2 bg-gray-100 rounded-lg"
          >
            <input
              type="text"
              value={Keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search"
              className="w-full text-base bg-transparent placeholder-current focus:outline-none font-medium h-full w-full leading-normal text-gray-800"
            />
            <input className="hidden" type="submit" value="Submit" />
            <SearchIcon />
          </form>
          <div className="flex   items-center justify-end">
            <div className="flex  transition duration-300 transform hover:scale-125 cursor-pointer items-center justify-center h-full px-4 py-2 rounded-lg hover:bg-yellow-100">
              <AccountIcon />
            </div>
            <div className="flex transition duration-300 transform hover:scale-125 cursor-pointer items-center justify-center h-full px-4 py-2 rounded-lg hover:bg-yellow-100">
              <LikeIcon />
            </div>
            <Link
              to="/cart"
              className="flex relativetransition duration-300 transform hover:scale-125 cursor-pointer items-center justify-center h-full px-4 py-2 rounded-lg hover:bg-yellow-100"
            >
              <span class="absolute font-semibold leading-normal text-gray-800" style={{ top: "-9px" }}>
                {Cart.length}
              </span>
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
