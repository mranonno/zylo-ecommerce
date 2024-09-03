import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    test: "",
  name: "",
  email: "",
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
  },
});

export const { setUser,setTest } = userSlice.actions;

export default userSlice.reducer;