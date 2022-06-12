/* eslint-disable @typescript-eslint/no-unused-vars */
import {ofType} from 'redux-observable';
import {FETCH_SAMPLE_API} from '../constants';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {FetchSampleAPIFailed, FetchSampleAPISuccess} from './actions';
import {of} from 'rxjs';
import {request} from 'shared/functions/apiClient';

const fetchSampleAPIEpic = action$ =>
  action$.pipe(
    ofType(FETCH_SAMPLE_API),
    mergeMap(action =>
      request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
      }),
    ),
    map(response => {
      console.log(response);
      if (response.status === 200) {
        return FetchSampleAPISuccess.get(response.data);
      } else {
        return FetchSampleAPIFailed.get();
      }
    }),
    catchError(error => of(FetchSampleAPIFailed.get())),
  );

export default fetchSampleAPIEpic;
