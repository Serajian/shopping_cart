/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedNum: 0,
  addedProducts: [],
};
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      if (state.addedProducts.some((item) => item.id === id)) {
        state.addedProducts.map((item) => {
          if (item.id === id) {
            item.count += 1;
            item.totalPrice = item.count * item.price;
          }
        });
      } else {
        state.addedProducts.push({
          ...action.payload,
          count: 1,
          totalPrice: price,
        });
        state.addedNum += 1;
      }
    },
    increaseInCart: (state, action) => {
      state.addedProducts.map((item) => {
        if (item.id === action.payload) {
          item.count += 1;
          item.totalPrice = item.count * item.price;
        }
      });
    },
    decreaseInCart: (state, action) => {
      state.addedProducts.map((item) => {
        if (item.id === action.payload) {
          item.count -= 1;
          item.totalPrice = item.count * item.price;
        }
      });
    },
    removeFromCart: (state, action) => {
      const updateAddedProducts = state.addedProducts.filter(
        (item) => item.id !== action.payload
      );
      state.addedProducts = updateAddedProducts;
      state.addedNum -= 1;
    },
  },
});

export const { addToCart, increaseInCart, decreaseInCart, removeFromCart } =
  slice.actions;
export default slice.reducer;
