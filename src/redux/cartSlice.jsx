import { createSlice } from '@reduxjs/toolkit';

// Load initial state from local storage or use default values
const initialState = JSON.parse(localStorage.getItem('cart')) || {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const saveToLocalStorage = state => {
  localStorage.setItem('cart', JSON.stringify(state));
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

      // Save updated state to local storage
      saveToLocalStorage(state);
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const itemToRemove = state.products.find(item => item.id === id);

      if (itemToRemove) {
        // Deduct the product's quantity and subtotal from overall totals
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.products = state.products.filter(item => item.id !== id);

        // Save updated state to local storage
        saveToLocalStorage(state);
      }
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;

        // Save updated state to local storage
        saveToLocalStorage(state);
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

        // Save updated state to local storage
        saveToLocalStorage(state);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
