import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
