import { takeLatest, call, put } from 'redux-saga/effects';
import Papa from 'papaparse';

import { FETCH_DATA_REQUEST } from './actionTypes';
import { fetchDataSuccess, fetchDataFail } from './actions';

const parseCsv = file => {
  return new Promise((complete, error) => {
    Papa.parse(file, {
      header: true,
      download: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete,
      error,
    });
  });
};

function* fetchData() {
  try {
    const { data } = yield call(parseCsv, process.env.REACT_APP_CSV_URL);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

function* saga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default saga;
