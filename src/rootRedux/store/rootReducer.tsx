import {combineReducers} from 'redux';
import RootReducer from '../reducer';

export interface RootState {
  RootReducer: ReturnType<typeof RootReducer>;
}

export const reducer = combineReducers({
  RootReducer,
});
