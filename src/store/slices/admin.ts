import { CHALLENGES } from "@/constants/compare-our-challenges";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: string;
}

const initialState: InitialStateProps = {
  data: "",
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setAdmin: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setAdmin } = adminSlice.actions;

export default adminSlice;
