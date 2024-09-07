// src/store/rootReducer.js
import { combineReducers } from "redux";
import ProductSlice from "./Slice/ProductSlice";

const rootReducer = combineReducers({
  products: ProductSlice,
});

export default rootReducer;
