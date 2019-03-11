import { call, takeLatest, put } from 'redux-saga/effects'
import * as types from '../constants'
import { fetchData } from '../api'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function* handleRequest(action) {
  yield call(delay, 300)
  
  yield put({ type: types.DURING_FETCH })

  const res = yield call(fetchData, action.payload)
  if (res.response) yield put({ type: types.FETCH_SUCCEED, payload: res.search })
  if (!res.response) yield put({ type: types.FETCH_FAILED, payload: res.error })
}

function* rootSaga() {
  yield takeLatest(types.FETCH_REQUEST, handleRequest)
}

export default rootSaga