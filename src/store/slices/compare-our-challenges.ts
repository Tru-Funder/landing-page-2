import { CHALLENGES } from "@/constants/compare-our-challenges";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: {
    accountType: number;
    accountSize: number;
  };
}

const initialState: InitialStateProps = {
  data: {
    accountType: 0,
    accountSize: 0,
  },
};

const challengesSlice = createSlice({
  name: "challengesSlice",
  initialState,
  reducers: {
    setAccountType: (state, action) => ({
      ...state,
      data: { ...state.data, accountType: action.payload },
    }),

    setAccountSize: (state, action) => ({
      ...state,
      data: { ...state.data, accountSize: action.payload },
    }),
  },
});

export const { setAccountType, setAccountSize } = challengesSlice.actions;

export default challengesSlice;
