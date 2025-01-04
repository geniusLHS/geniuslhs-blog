import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoDepend } from "../../types";
import { infoReducer } from "./infoReducer";

const infoSlice = createSlice({
  name: "infodepend",
  initialState: {
    name: "",
    copyName: "",
    doubleCopyName: "",
  },
  reducers: {
    setInfo: (state, action: PayloadAction<{ property: keyof InfoDepend; value: string }>) => {
      const { property, value } = action.payload;
      return infoReducer(state, { property, payload: value });
    },
  },
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
