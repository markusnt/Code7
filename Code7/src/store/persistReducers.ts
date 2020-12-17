/* eslint-disable @typescript-eslint/explicit-function-return-type */
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'code7',
      storage: AsyncStorage,
      whitelist: ['news', 'modal'],
    },
    reducers,
  );
  return persistedReducer;
};
