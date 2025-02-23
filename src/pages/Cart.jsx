import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmtyCart from '../assets/images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('main street, 0012');
  const [isModelOpen, setModelOpen] = useState(false);
  const [confirmationId, setConfirmationId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = productId => {
    dispatch(removeFromCart(productId));
    toast.success('Product removed from cart');
    setConfirmationId(null);
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-96">
      <ToastContainer />
      {cart.products && cart.products.length > 0 ? (
        <>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            {/* Table for Cart Products */}
            <div className="md:w-2/3 overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-xs font-bold text-left">
                    <th className="p-2 border border-gray-300">PRODUCT</th>
                    <th className="p-2 border border-gray-300 text-center">
                      PRICE
                    </th>
                    <th className="p-2 border border-gray-300 text-center">
                      QUANTITY
                    </th>
                    <th className="p-2 border border-gray-300 text-center">
                      SUBTOTAL
                    </th>
                    <th className="p-2 border border-gray-300 text-center">
                      REMOVE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="p-2 border border-gray-300">
                        <div className="flex items-center space-x-4">
                          <img
                            src={product.Image}
                            alt={product.name}
                            className="w-16 h-16 object-contain rounded"
                          />
                          <div>
                            <h3 className="text-sm font-semibold">
                              {product.name}
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-gray-300 text-center">
                        ${product.price}
                      </td>
                      <td className="p-2 border border-gray-300 text-center">
                        <div className="flex items-center justify-center border">
                          <button
                            disabled={product.quantity === 1}
                            className="text-xl font-bold px-2 border-r"
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                          >
                            -
                          </button>
                          <p className="text-xl px-2">{product.quantity}</p>
                          <button
                            className="text-xl px-2"
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-2 border border-gray-300 text-center">
                        ${(product.quantity * product.price).toFixed(2)}
                      </td>
                      <td className="p-2 border border-gray-300 text-center">
                        {confirmationId === product.id ? (
                          <div className="flex items-center space-x-4">
                            <p className="text-gray-700 text-sm md:text-xs  font-semibold">
                              Remove this item?
                            </p>
                            <button
                              className="bg-red-600 text-white px-3 py-1 rounded"
                              onClick={() => handleRemove(product.id)}
                            >
                              Yes
                            </button>
                            <button
                              className="bg-gray-400 text-white px-3 py-1 rounded"
                              onClick={() => setConfirmationId(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => setConfirmationId(product.id)}
                          >
                            <FaTrashAlt />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Cart Totals */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTALS</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p>
                  Shipping to:{' '}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1"
                  onClick={() => setModelOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate('/checkout')}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen} setModelOpen={setModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setModelOpen={setModelOpen}
            />
          </Modal>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={EmtyCart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
