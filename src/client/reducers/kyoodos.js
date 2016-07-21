
const initialState = {
  kyoodos: [],
  users: {},
  allUsers: {}
}

export default function data(state=initialState, action) {
  let updatedUsers;

  switch(action.type) {
    case 'KYOODOS_FETCH':
      return state
    case 'KYOODOS_FETCH_ERROR':
      return state
    case 'KYOODOS_FETCH_SUCCESS':
      return Object.assign(state, { kyoodos: [...action.data] })
    case 'KYOODOS_LAST_SENT_BY_USER':
      updatedUsers = Object.keys(state.allUsers).map((u) => {
        if (u.id == action.data.to_user_id) {
          u['last_sent'] = action.data
        }
        return u
      })
      return Object.assign(state, { allUsers: updatedUsers })
    case 'KYOODOS_LAST_RECEIVED_BY_USER':
      updatedUsers = Object.keys(state.allUsers).map((u) => {
        if (u.id == action.data.from_user_id) {
          u['last_received'] = action.data
        }
        return u
      })
      return Object.assign(state, { allUsers: updatedUsers })
    case 'USERS_FETCH_ALL_SUCCESS':
      let updatedAllUsers = Object.assign(state.allUsers, action.data)
      return Object.assign(state, { allUsers: updatedAllUsers })
    case 'USERS_FETCH_ERROR':
      return state
    case 'USERS_FETCH_SUCCESS':
      if (action.data) {
        updatedUsers = Object.assign(state.allUsers, action.data)
      }
      return Object.assign(state, { users: updatedUsers })
    case 'USERS_FETCH_CACHED':
      return state
    default:
      return state
  }
}
