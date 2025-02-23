import React, { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Modal from './Modal';
import { setSearchTerm, setLoadingState } from '../redux/productSlice';

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== '') {
      dispatch(setSearchTerm(search));
      setTimeout(() => {
        dispatch(setLoadingState());
      }, 500);
      navigate('/filter-data');
    }
  }, [search]);

  const openSignUp = () => {
    setIsModelOpen(true);
  };
  const openLoging = () => {
    setIsModelOpen(true);
  };

  const products = useSelector(state => state.cart.products);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink to="/" className="hover:text-red-500">
            e-Shop
          </NavLink>
        </div>
        <div className="relative flex-1 mx-4">
          <form
            onSubmit={e => {
              e.preventDefault();
              setSearch(e.target.search.value);
            }}
          >
            <input
              name="search"
              type="text"
              placeholder="Search Product"
              className="w-full border rounded-full py-2 px-2 shadow-md"
              onChange={e => setSearch(e.target.value)}
              required
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </NavLink>
          <button
            className="hidden md:block"
            onClick={() => setIsModelOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-red-500 underline' : 'hover:underline'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? 'text-red-500 underline' : 'hover:underline'
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-red-500 underline' : 'hover:underline'
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-red-500 underline' : 'hover:underline'
          }
        >
          About
        </NavLink>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLoging={openLoging} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
