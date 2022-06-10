import {combineReducers} from 'redux';
import HomeReducer from 'screens/home/redux/reducer';
import RootReducer from '../reducer';

export interface RootState {
  RootReducer: ReturnType<typeof RootReducer>;
  HomeReducer: ReturnType<typeof HomeReducer>;
}

export const reducer = combineReducers({
  RootReducer,
  HomeReducer,
});
