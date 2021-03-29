import { call, put, takeLatest } from 'redux-saga/effects'

import fetchData from "../firebaseConfig.js";

function* fetchInitialData(action) {
    try {
        const data = yield call(fetchData);
        if (data) {
            yield put({
                type: "FETCH_SUCCEEDED", data: {
                    data: data
                }
            });
        } else {
            yield put({ type: "FETCH_FAILED", data: data });
        }

    } catch (e) {
        yield put({ type: "FETCH_FAILED", message: e.message });
    }
}

function* mySaga() {
    yield takeLatest("FETCH_INIT_DATA", fetchInitialData);
}

export default mySaga;