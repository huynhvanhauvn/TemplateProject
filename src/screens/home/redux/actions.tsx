import {createAction} from 'shared/functions';
import { FETCH_SAMPLE_API, FETCH_SAMPLE_API_FAILED, FETCH_SAMPLE_API_SUCCESS } from '../constants';

export const FetchSampleAPI = createAction(FETCH_SAMPLE_API);
export const FetchSampleAPISuccess = createAction(FETCH_SAMPLE_API_SUCCESS);
export const FetchSampleAPIFailed = createAction(FETCH_SAMPLE_API_FAILED);
