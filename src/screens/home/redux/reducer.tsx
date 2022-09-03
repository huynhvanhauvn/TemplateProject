import {FETCH_SAMPLE_API_SUCCESS, HomeState} from '../constants';

const INIT_STATE = {};

const HomeReducer = (state: HomeState = INIT_STATE, action: any) => {
  switch (action.type) {
    case FETCH_SAMPLE_API_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default HomeReducer;
