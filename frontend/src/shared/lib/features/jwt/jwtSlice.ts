import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type jwtState = {
  token: string;
};

const initialState: jwtState = {
  token: "",
};

export const jwtSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = jwtSlice.actions;
export default jwtSlice.reducer;
