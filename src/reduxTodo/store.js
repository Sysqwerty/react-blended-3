import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { toDoReducer } from './toDoSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'todos',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, toDoReducer);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
