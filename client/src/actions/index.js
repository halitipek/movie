import * as types from '../constants'

export function fetchRequest (keyword) {
  return {
    type: types.FETCH_REQUEST,
    payload: keyword
  }
}

export function clearScreen () {
  return {
    type: types.CLEAR_SCREEN
  }
}