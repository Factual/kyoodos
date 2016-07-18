import { KYOODOS_POST, KYOODOS_FETCH_SUCCESS } from '../consts'

const initialState = []

export default function kyoodos(state=initialState, action) {
  switch(action.type) {
    case 'KYOODOS_FETCH_SUCCESS':
      return [...state, ...action.data]
    case 'KYOODOS_POST':
      return state
    default:
      return state
  }
}
