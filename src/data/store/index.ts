import {configureStore, combineReducers} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-community/async-storage';

import {CategoriesState} from './modules';

const RootReducer = combineReducers({
  [CategoriesState.name]: CategoriesState.reducer,
});

const store = configureStore({
  reducer: persistReducer(
    {
      key: 'root',
      version: 1,
      storage: AsyncStorage,
      // blacklist: [CategoriesState.name],
    },
    RootReducer,
  ),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const {dispatch: appDispatch} = store;
export type AppStateType = ReturnType<typeof RootReducer>;

export const persistor = persistStore(store);

export default store;
