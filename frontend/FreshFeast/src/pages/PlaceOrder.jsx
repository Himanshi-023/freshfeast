
import React, { useContext, useState } from 'react';
import { DataContext } from '../context/ItemsContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { totalAmount, token, food_list, cartItems, url } = useContext(DataContext);
  const deliveryFees = 10;
  const subtotal = totalAmount();
  const total = subtotal + deliveryFees;

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData ={
      address:data,
      items:orderItems,
      amount:totalAmount()+2
    }

    let responce=await axios.post(url +"/api/order/place", orderData,{headers:{token}})
    console.log(responce);
    if(responce.data.success)
    {
      const {session_url}=responce.data;
      window.location.replace(session_url);
    }

    else{
      alert("Error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Place Your Order</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1: Delivery Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <form className="space-y-6" onSubmit={placeOrder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder='First name'
                value={data.firstName}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder='Last name'
                value={data.lastName}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder='Email address'
                value={data.email}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <input
                type="text"
                name="street"
                placeholder='Street'
                value={data.street}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="city"
                placeholder='City'
                value={data.city}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <input
                type="text"
                name="state"
                placeholder='State'
                value={data.state}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="zipcode"
                placeholder='Zip code'
                value={data.zipcode}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <input
                type="text"
                name="country"
                placeholder='Country'
                value={data.country}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder='Phone'
                value={data.phone}
                onChange={onChangeHandler}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-300 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* Column 2: Cart Total */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-semibold">Delivery Fees</p>
            <p className="font-semibold">${deliveryFees.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4 border-t border-gray-300 pt-2">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
