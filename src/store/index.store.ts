import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import challengesSlice from "./slices/compare-our-challenges";
import wihtelistSlice from "./slices/whitelist";
import adminSlice from "./slices/admin";
import adminWhitelistSlice from "./slices/admin-whitelist";

const reducer = combineReducers({
  [challengesSlice.name]: challengesSlice.reducer,
  [wihtelistSlice.name]: wihtelistSlice.reducer,
  [adminSlice.name]: adminSlice.reducer,
  [adminWhitelistSlice.name]: adminWhitelistSlice.reducer,
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
