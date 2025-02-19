import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [],
  searchTerm: '',
  filteredData: '',
  isProductFetching: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.isProductFetching = true;
      state.filteredData = state.products.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
    setLoadingState(state) {
      state.isProductFetching = false;
    },
  },
});
export const { setProducts, setSearchTerm, setLoadingState } =
  productSlice.actions;
export default productSlice.reducer;
