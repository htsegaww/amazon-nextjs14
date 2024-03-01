import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

// Define a type for the slice state
export interface cartState {
  cart: any;
}

// Define the initial state using that type
const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
