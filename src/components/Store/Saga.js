import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import fetchData from "../firebaseConfig.js";
import leftPaneData from "../LeftPane/leftPaneData.js";

//Data Sagas
function* fetchInitialData(action) {
  try {
    const data = yield call(fetchData);

    if (data) {
      const leftPaneDataObj = yield call(
        leftPaneData,
        data.appFeatureAvailability
      );

      yield put({
        type: "FETCH_SUCCEEDED",
        data: {
          data: data,
          leftPaneData: leftPaneDataObj,
        },
      });
    } else {
      yield put({ type: "FETCH_FAILED", data: data });
    }
  } catch (e) {
    yield put({ type: "FETCH_FAILED", message: e.message });
  }
}

function* dataSaga() {
  yield takeLatest("FETCH_INIT_DATA", fetchInitialData);
}

//Banner Sagas
function* updateBanner(action) {
  yield put({
    type: "UPDATE_BANNER_ASYNC",
    data: action.data,
  });
}

function* feedbackSaga() {
  yield takeLatest("UPDATE_BANNER", updateBanner);
}

export default function* rootSaga() {
  yield all([fork(dataSaga), fork(feedbackSaga)]);
}
