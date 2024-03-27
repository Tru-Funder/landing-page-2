import { CHALLENGES } from "@/constants/compare-our-challenges";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: Record<string, any>[] | null;
}

const initialState: InitialStateProps = {
  data: null,
};

const adminWhitelistSlice = createSlice({
  name: "adminWhitelistSlice",
  initialState,
  reducers: {
    setAdminWhitelist: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setAdminWhitelist } = adminWhitelistSlice.actions;

export default adminWhitelistSlice;
