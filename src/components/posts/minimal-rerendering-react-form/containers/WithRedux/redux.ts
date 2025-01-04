import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Info } from "../../types";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    name: "",
    email: "",
    nickname: "",
    address: "",
  },
  reducers: {
    setInfo: (state, action: PayloadAction<{ property: keyof Info; value: string }>) => {
      const { property, value } = action.payload;
      state[property] = value;
    },
  },
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
