import React from 'react';
import { useSelector } from 'react-redux';
import EmtyCart from '../assets/images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <div>
      {cart.products.length > 0 ? (
        <div>
          <h3>SHOPPING CART</h3>
          <div>
            <div>
              <div>
                <p>PRODUCTS</p>
                <div>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map(product => (
                  <div key={product.id}>
                    <img src={product.Image} alt="" />
                    <div>
                      <h3>{product.name}</h3>
                    </div>
                    <div>
                      <p>${product.totalPrice}</p>
                      <div className="flex">
                        <button>-</button>
                        <p>{product.quantity}</p>
                        <button>+</button>
                      </div>
                      <p>
                        ${(product.quantity * product.totalPrice).toFixed(2)}
                      </p>
                      <button>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmtyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
