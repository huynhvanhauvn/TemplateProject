import {combineReducers} from 'redux';
import HomeReducer from 'screens/home/redux/reducer';
import RootReducer from '../reducer';
import CategoryReducer from 'screens/category/redux/reducer';
import SettingReducer from 'screens/setting/redux/reducer';

export interface RootState {
  RootReducer: ReturnType<typeof RootReducer>;
  HomeReducer: ReturnType<typeof HomeReducer>;
  CategoryReducer: ReturnType<typeof CategoryReducer>;
  SettingRducer: ReturnType<typeof SettingReducer>;
}

export const reducer = combineReducers({
  RootReducer,
  HomeReducer,
  CategoryReducer,
  SettingReducer,
});
