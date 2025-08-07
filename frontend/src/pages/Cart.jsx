import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity,
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-4 sm:px-10">
      <div className="text-2xl mb-6">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-6 border rounded-lg px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white shadow-sm"
            >
              <div className="flex items-start gap-4 sm:gap-6 w-full sm:w-auto">
                <img className="w-20 h-20 object-cover rounded-md" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-base sm:text-lg font-medium text-gray-800">{productData.name}</p>
                  <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.size, Math.max(item.quantity - 1, 1))
                      }
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-sm font-semibold text-gray-700 mt-2">
                    {(productData.price * item.quantity).toFixed(2)} {currency}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end w-full sm:w-auto">
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Delete"
                  className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
