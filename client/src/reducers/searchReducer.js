import * as types from '../constants'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DURING_FETCH:
      return { ...initialState, loading: true }

    case types.FETCH_SUCCEED:
      return { ...initialState, data: payload}

    case types.FETCH_FAILED:
      return { ...initialState, error: payload}

    case types.CLEAR_SCREEN:
      return { ...initialState }

    default:
      return state
  }
}