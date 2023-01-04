import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { API } from '../api/api';
import userReducer from '../features/userSlice';
import userDetailsReducer from '../features/userDetailsSlice'

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    userState: userReducer,
    userDetailsState: userDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(API.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);
