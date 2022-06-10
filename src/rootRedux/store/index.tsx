import {createEpicMiddleware} from 'redux-observable';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {reducer, RootState} from './rootReducer';
import {epic} from 'rootRedux/epic';

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['Root'],
  stateReconciler: autoMergeLevel2,
};

const finalReducer = persistReducer<RootState, any>(persistConfig, reducer);

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  finalReducer,
  applyMiddleware(logger, epicMiddleware),
);

epicMiddleware.run(epic);

export const persistor = persistStore(store);
