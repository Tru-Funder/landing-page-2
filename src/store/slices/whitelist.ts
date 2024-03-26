import { CHALLENGES } from "@/constants/compare-our-challenges";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: {
    userId: string;
    userDetails: Record<string, any>;
    paymentMethod: string;
    accountSize: Record<string, any>;
  };
}

const initialState: InitialStateProps = {
  data: {
    userId: "",
    userDetails: {},
    paymentMethod: "",
    accountSize: {},
  },
};

const wihtelistSlice = createSlice({
  name: "wihtelistSlice",
  initialState,
  reducers: {
    setWhitelistUserId: (state, action) => ({
      ...state,
      data: { ...state.data, userId: action.payload },
    }),

    setWhitelistUserDetails: (state, action) => ({
      ...state,
      data: { ...state.data, userDetails: action.payload },
    }),

    setWhitelistUserPaymentMethod: (state, action) => ({
      ...state,
      data: { ...state.data, paymentMethod: action.payload },
    }),

    setWhitelistUserAccountSize: (state, action) => ({
      ...state,
      data: { ...state.data, accountSize: action.payload },
    }),
  },
});

export const {
  setWhitelistUserId,
  setWhitelistUserDetails,
  setWhitelistUserPaymentMethod,
  setWhitelistUserAccountSize,
} = wihtelistSlice.actions;

export default wihtelistSlice;
