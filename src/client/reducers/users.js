import { USER_GET } from '../consts'

const initialState = []

export default function users(state=initialState, action) {
  switch(action.type) {
    case 'USER_GET':
      return [...state, ...action.users]
    default:
      return state
  }
}
