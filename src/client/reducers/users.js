import { USER_GET } from '../consts'

// format: { db_user_id: JSON_OF_USERINFO }
const initialState = {}

export default function users(state=initialState, action) {
  switch(action.type) {
    case 'USERS_FETCH_SUCCESS':
      return Object.assign(state, action.data)
    default:
      return state
  }
}
