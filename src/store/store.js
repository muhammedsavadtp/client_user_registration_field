import { configureStore } from "@reduxjs/toolkit";
import User from "./slice/User";

export default configureStore({
  reducer: {
    User,
  },
});
