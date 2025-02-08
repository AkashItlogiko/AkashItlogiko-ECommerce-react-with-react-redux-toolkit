import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/productSlice';
import React, { useEffect, useState } from 'react';
import { mockData } from '../assets/mockData';
import Animation from '../assets/loading/Animation.json';
import Lottie from 'lottie-react';

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  useEffect(() => {
    setLoading(true); // Start loading
    // Simulate an API call delay for demonstration
    setTimeout(() => {
      dispatch(setProducts(mockData));
      setLoading(false); // End loading
    }, 1500); // Adjust time as needed
  }, [dispatch]);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      {loading ? ( // Step 3: Conditional rendering
        <div className="flex justify-center items-center h-32">
          <div>
            <span className="visually-hidden">
              <Lottie animationData={Animation} />
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
