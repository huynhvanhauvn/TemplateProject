import {combineEpics} from 'redux-observable';
import fetchSampleAPIEpic from 'screens/home/redux/epics';

export const epic = combineEpics(fetchSampleAPIEpic);
