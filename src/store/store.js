import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

//Esta es mi fuente unica de la verdad
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
