import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartItemID {
  id: string;
}

export interface CartItem {
  id: string;
  title: string;
  photo: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItem: CartItem[];
}

const initialState: CartState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cartItem.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<CartItemID>) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<CartItemID>) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        if (item?.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export const cartSeleter = (state: RootState) => state.cart;
export default cartSlice.reducer;
