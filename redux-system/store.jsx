import { configureStore } from "@reduxjs/toolkit";
import { postDetails } from "./redux-slices/postslice.jsx";

const store = configureStore({ reducer: { postDetails } });

export default store;
