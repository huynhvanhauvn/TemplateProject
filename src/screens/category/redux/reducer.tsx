import {CategoryState} from '../constants';

const INIT_STATE = {};

const CategoryReducer = (state: CategoryState = INIT_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CategoryReducer;
