import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { journalSlice } from "./journal";

//Esta es mi fuente unica de la verdad
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
});
