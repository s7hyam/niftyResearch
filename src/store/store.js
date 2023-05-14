import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";

const rootReducer = {
  theme: themeReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
