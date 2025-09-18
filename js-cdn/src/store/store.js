import { configureStore } from "https://esm.sh/@reduxjs/toolkit@^2.2.6?deps=react@^18.3.1,react-dom@^18.3.1";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
