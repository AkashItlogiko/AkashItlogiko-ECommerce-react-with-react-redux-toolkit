import React from 'react';
import { useSelector } from 'react-redux';
import EmtyCart from '../assets/images/emptycart.png'

const Cart = () => {
  const cart =useSelector(state=>state.cart)
  return
(<div>
{cart.products.length>0?<div></div>:

<div>
  <img src="" alt="" />
</div>
} 
</div>)
  
};

export default Cart;
