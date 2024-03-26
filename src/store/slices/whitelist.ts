import { CHALLENGES } from "@/constants/compare-our-challenges";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: {
    email: string;
  };
}

const initialState: InitialStateProps = {
  data: {
    email: "",
  },
};

const wihtelistSlice = createSlice({
  name: "wihtelistSlice",
  initialState,
  reducers: {
    setWhitelistEmail: (state, action) => ({
      ...state,
      data: { ...state.data, email: action.payload },
    }),
  },
});

export const { setWhitelistEmail } = wihtelistSlice.actions;

export default wihtelistSlice;
