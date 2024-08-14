
import React, { useContext, useState } from 'react';
import { DataContext } from '../context/ItemsContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { food_list, cartItems, removeFromCart, totalAmount,url } = useContext(DataContext);
  const [promoCode, setPromoCode] = useState('');
  const [feedback, setFeedback] = useState('');

  const deliveryFees = 10;
  const subtotal = totalAmount();
  const total = subtotal + deliveryFees;

  const handlePromoCodeSubmit = () => {
    // Implement promo code logic here
    if (promoCode) {
      setFeedback('Promo code applied successfully!'); // Example feedback message
      setPromoCode('');
    } else {
      setFeedback('Please enter a promo code.');
    }
  };

  return (
    <div className="p-6 min-h-screen mt-5">
      {subtotal === 0 ? (
        <div className="text-center flex flex-col justify-center items-center">
        <img src="https://i.pinimg.com/564x/47/07/f4/4707f4138db3ff7930a081dc17974fd8.jpg"  className='w-[450px]' alt="" />
          <h2 className="text-3xl font-bold">Your Cart is Empty !</h2>
          <p className="mt-5 text-xl text-slate-600">It looks like you haven't added any items to your cart yet. Start shopping now!</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            {/* Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 text-center font-semibold mb-4">
              <p className="font-bold">Item</p>
              <p className="font-bold">Title</p>
              <p className="font-bold">Price</p>
              <p className="font-bold">Quantity</p>
              <p className="font-bold">Total</p>
              <p className="font-bold">Remove</p>
            </div>

            <div className="md:hidden mb-4 text-center font-semibold">
              <p className="font-bold">Cart Items</p>
            </div>
          </div>

          <hr className="mb-4" />

          {food_list.map((cur) => {
            if (cartItems[cur._id] > 0) {
              return (
                <div
                  key={cur._id}
                  className="flex md:grid md:grid-cols-6 gap-4 items-center mb-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="flex justify-center mb-4 md:mb-0 md:col-span-1">
                    <img
                      src={ url+"/images/"+ cur.image}
                      alt={cur.name}
                      className="w-16 h-16 object-cover"
                    />

                  </div>
                  <div className="text-center md:col-span-1">
                    <p className="text-base md:text-lg font-medium">{cur.name}</p>
                  </div>
                  <div className="text-center md:col-span-1">
                    <p className="text-base md:text-lg">${cur.price}</p>
                  </div>
                  <div className="text-center md:col-span-1">
                    <p className="text-base md:text-lg">{cartItems[cur._id]}</p>
                  </div>
                  <div className="text-center md:col-span-1">
                    <p className="text-base md:text-lg">${(cartItems[cur._id] * cur.price).toFixed(2)}</p>
                  </div>
                  <div className="text-center md:col-span-1">
                    <button
                      onClick={() => removeFromCart(cur._id)}
                      className="text-red-500 hover:text-red-700 font-semibold text-base md:text-lg"
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Grid for Cart Total and Promo Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Cart Total */}
            <div className="p-4 bg-white rounded-lg shadow-md">
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
             <NavLink  to="/order" >
             <button
                onClick={() => alert('Proceeding to checkout')}
                className="w-full py-2 px-4 bg-yellow-300 text-white font-semibold rounded-lg hover:bg-yellow-400"
              >
                Proceed to Checkout
              </button>
             </NavLink>
            </div>

            {/* Promo Code */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Promo Code</h2>
              <p className="mb-4">If you have a promo code, enter it below to receive a discount on your total purchase.</p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={handlePromoCodeSubmit}
                  className="py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-green-500"
                >
                  Apply
                </button>
              </div>
              {feedback && <p className="text-green-500 font-semibold">{feedback}</p>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
