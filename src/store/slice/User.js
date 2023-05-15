import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

// for dispatch
export const { setUser } = userSlice.actions;

// for configureStore
export default userSlice.reducer;
