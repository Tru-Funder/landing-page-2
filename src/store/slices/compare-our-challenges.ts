import { ACCOUNT_SIZES } from "@/constants/compare-our-challenges";
import { TRU_FUNDER_CHALLENGE_TYPES } from "@/constants/trufunder-challenge-types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: string;
}

const initialState: InitialStateProps = {
  data: ACCOUNT_SIZES[0].title,
};

const compareOurChallengesSlice = createSlice({
  name: "compareOurChallengesSlice",
  initialState,
  reducers: {
    setAccountSize: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setAccountSize } = compareOurChallengesSlice.actions;

export default compareOurChallengesSlice;
