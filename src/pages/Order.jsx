import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cartcontext";
import OrderAnimation from "../components/OrderAnimation";
const Order = () => {
  const [Orderanim, setOrderanim] = useState(false);
  const { Cart, dispatch } = useContext(CartContext);
  const PlaceOrder = ()=>{
    setOrderanim(true)
    dispatch({ type: "DeleteAll"});
  }
  return (
    <>
      {Orderanim ? <OrderAnimation /> : null}
      <div
        className={Orderanim ? "hidden" : "container mx-auto py-5 space-y-2"}
      >
        <p className="text-3xl font-bold leading-9 text-gray-800">
          Billing Info
        </p>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <div className="inline-flex flex-col space-y-6 items-center justify-start p-5 bg-white shadow rounded-lg">
              <p className="w-full text-2xl font-bold leading-loose text-gray-900">
                Bradly Daniel
              </p>
              <p className="w-full text-lg font-medium leading-7 text-gray-900">
                Shop No.2, Patel House, L T Road, Nr Janta Dresses, Mulund (e),
                Mumbai, Maharashtra, 400082
              </p>
              <div className="inline-flex space-x-2 items-center justify-center w-full px-6 py-3 border rounded-lg border-black">
                <form>
                  <input type="radio" name="radio" value="1" checked />
                </form>
                <p className="text-lg font-medium leading-7 text-gray-800">
                  Deliver here
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex lg:col-span-5 flex-col space-y-6 items-start justify-start p-5 w-full bg-white shadow rounded-lg">
            <p className="text-2xl font-bold leading-loose text-gray-900">
              Add a new address
            </p>
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="text-lg font-semibold leading-7 text-gray-800">
                Full name
              </p>
              <div className="inline-flex items-center justify-start px-4 py-2 w-full bg-gray-100 rounded-lg">
                <input
                  type="text"
                  placeholder="eg- John Stency"
                  className="w-full text-base font-medium leading-normal text-gray-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="text-lg font-semibold leading-7 text-gray-800">
                Flat, House no., Building, Company, Apartment
              </p>
              <div className="inline-flex items-center justify-start px-4 py-2 w-full bg-gray-100 rounded-lg">
                <input
                  type="text"
                  placeholder="eg-  Shop No.2, Patel House, L T Road"
                  className="w-full text-base font-medium leading-normal text-gray-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="text-lg font-semibold leading-7 text-gray-800">
                Area, Colony, Street, Sector, Village
              </p>
              <div className="inline-flex items-center justify-start px-4 py-2 w-full bg-gray-100 rounded-lg">
                <input
                  type="text"
                  placeholder="eg- Mulund (e), Mumbai"
                  className="w-full text-base font-medium leading-normal text-gray-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="text-lg font-semibold leading-7 text-gray-800">
                PIN code
              </p>
              <div className="inline-flex items-center justify-start px-4 py-2 w-full bg-gray-100 rounded-lg">
                <input
                  type="text"
                  placeholder="eg- 400082"
                  className="w-full text-base font-medium leading-normal text-gray-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="inline-flex items-center justify-center w-full px-6 py-3 border rounded-lg border-black">
              <p className="text-lg font-medium leading-7 text-gray-800">
                Add address
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <form className="w-full inline-flex flex-col space-y-6 items-center justify-start p-4 bg-white shadow rounded-lg">
              <p className="w-full text-2xl font-bold leading-loose text-gray-900">
                Select Payment Option
              </p>
              <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
                <input id="card" type="radio" name="radio" value="1" />
                <label
                  for="card"
                  className="text-lg font-medium leading-7 text-gray-800"
                >
                  Add Debit/Credit/ATM Card
                </label>
              </div>
              <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
                <input type="radio" id="net" name="radio" value="1" />
                <label
                  for="net"
                  className="text-lg font-medium leading-7 text-gray-800"
                >
                  Net Banking
                </label>
              </div>
              <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
                <input type="radio" id="upi" name="radio" value="1" />
                <label
                  for="upi"
                  className="text-lg font-medium leading-7 text-gray-800"
                >
                  Other UPI Apps
                </label>
              </div>
              <div className="inline-flex space-x-4 items-center justify-start w-full px-6 py-3 rounded-lg">
                <input type="radio" id="cod" name="radio" value="1" />
                <label
                  for="cod"
                  className="text-lg font-medium leading-7 text-gray-800"
                >
                  Pay on Delivery
                </label>
              </div>
              <div
                className="cursor-pointer inline-flex items-center justify-center w-full px-6 py-3 bg-yellow-500 rounded-lg"
                onClick={PlaceOrder}
              >
                <p className="text-3xl font-bold leading-9 text-white">
                  Place Order
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
