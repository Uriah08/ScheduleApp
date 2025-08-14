import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "@/store";
import { api } from "@/store/api";

export const store = configureStore({
  reducer: {
    counter: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
