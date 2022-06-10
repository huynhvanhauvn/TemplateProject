import {changeLanguage} from '../shared/language';

export interface IRootState {
  language: String;
}

const INIT_STATE: IRootState = {
  language: 'en',
};

export default (state: IRootState = INIT_STATE, action: any) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      changeLanguage(action.payload);
      return {
        language: action.payload,
      };

    default:
      return state;
  }
};
