import { ofType } from "redux-observable";
import { FETCH_SAMPLE_API } from "../constants";

const fetchSampleAPIEpic = action$ => action$.pipe(
    ofType(FETCH_SAMPLE_API),
)