import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(p => p.name === item.name);

      if (existingItem) {
        existingItem.quantity += 1; // If item exists, increase quantity
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // ✅ Remove item by name
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // ✅ Update quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
