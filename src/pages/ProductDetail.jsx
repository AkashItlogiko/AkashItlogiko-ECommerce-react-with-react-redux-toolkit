import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Animation3 from '../assets/loading/Animation3.json';
import Lottie from 'lottie-react';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const [product, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newProduct = products.find(product => product.id === parseInt(id));
    setProducts(newProduct);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50">
          <Lottie
            animationData={Animation3}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
      ) : (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row gap-16">
            {/* {Product Image} */}
            <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
              <img
                src={product?.image}
                alt={product?.name}
                className="h-full"
              />
            </div>

            {/* Product Infomation */}
            <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
              <h2 className="text-3xl font-semibold mb-2">{product?.name}</h2>
              <p className="text-xl font-semibold text-g">${product?.price}</p>

              <div className="flex items-center mb-4 gap-x-2">
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  className="border p-1 w-16"
                  value={quantity}
                  onChange={e => {
                    const value = parseInt(e.target.value, 10);
                    setQuantity(value > 0 ? value : 1); // Ensure value stays above 1
                  }}
                />
                <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col gap-y-4 mt-4">
                <p className="flex  items-center">
                  <FaCarSide className="mr-1" />
                  Delivery & Return
                </p>
                <p className="flex items-center">
                  <FaQuestion className="mr-1" />
                  Ask a Question
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Product Description</h3>
            <p>Product descrition will goes here</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
