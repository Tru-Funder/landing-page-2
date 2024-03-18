import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import compareOurChallengesSlice from "./slices/compare-our-challenges";

const reducer = combineReducers({
  [compareOurChallengesSlice.name]: compareOurChallengesSlice.reducer,
});

const middleware: any = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware(),
];

const store = configureStore({
  reducer,
  middleware,
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
