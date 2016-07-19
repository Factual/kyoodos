import { USERS_FETCH_CACHED, USERS_FETCH_SUCCESS} from '../consts'

// format: { db_user_id: JSON_OF_USERINFO }
const initialState = {}

export default function users(state=initialState, action) {
  switch(action.type) {
    case USERS_FETCH_SUCCESS:
      return Object.assign(state, action.data)
    case USERS_FETCH_CACHED:
      return state
    default:
      return state
  }
}
