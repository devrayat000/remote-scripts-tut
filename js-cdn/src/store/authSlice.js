import { createSlice } from "https://esm.sh/@reduxjs/toolkit@^2.2.6?deps=react@^18.3.1,react-dom@^18.3.1";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      (state.status = false), (state.userData = null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
