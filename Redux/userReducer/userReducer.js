import { createSlice } from "@reduxjs/toolkit";
import { allProduct } from "../../assets/allProducts.json";

const initialState = {
  test: "",
  name: "",
  email: "",
  allProducts: allProduct,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setTest: (state, action) => {
      state.test = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setUser, setTest, setAllProducts } = userSlice.actions;

export default userSlice.reducer;
