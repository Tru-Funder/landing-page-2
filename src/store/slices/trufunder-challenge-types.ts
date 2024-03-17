import { TRU_FUNDER_CHALLENGE_TYPES } from "@/constants/trufunder-challenge-types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: string;
}

const initialState: InitialStateProps = {
  data: TRU_FUNDER_CHALLENGE_TYPES[0].title,
};

const truFunderChallengeTypesSlice = createSlice({
  name: "truFunderChallengeTypesSlice",
  initialState,
  reducers: {
    setTruFunderChallengeType: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setTruFunderChallengeType } =
  truFunderChallengeTypesSlice.actions;

export default truFunderChallengeTypesSlice;
