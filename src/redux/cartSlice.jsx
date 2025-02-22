import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price, // store the base price
          Image: newItem.image, // ensure the key name is consistent
        });
      }
      // Recalculate totals
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const itemToRemove = state.products.find(item => item.id === id);

      if (itemToRemove) {
        // Deduct the product's quantity and subtotal from overall totals
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.products = state.products.filter(item => item.id !== id);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find(item => item.id === id);

      if (existingItem) {
        // Only decrease if quantity is more than 1
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        } else {
          // If quantity goes to 0, remove the item
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
          state.products = state.products.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
