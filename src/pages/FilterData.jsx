import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import NoProduct from '../assets/images/not_found.png';
import Lottie from 'lottie-react';
import Animation4 from '../assets/loading/Animation4.json';

const FilterData = () => {
  const filterProducts = useSelector(state => state.product.filteredData);
  const isProductFetching = useSelector(
    state => state.product.isProductFetching
  );

  return (
    <>
      {isProductFetching ? (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50">
          <Lottie
            animationData={Animation4}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
      ) : (
        <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
          {filterProducts.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                {filterProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <img src={NoProduct} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FilterData;
