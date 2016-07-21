
const initialState = {
  kyoodos: [],
  users: {}
}

export default function data(state=initialState, action) {
  switch(action.type) {
    case 'KYOODOS_FETCH':
      return state
    case 'KYOODOS_FETCH_ERROR':
      return state
    case 'KYOODOS_FETCH_SUCCESS':
        // TODO: prevent duplicates from entering ...... :( !
      return {
        kyoodos: [...action.data],
        users: state.users
      }
    case 'USERS_FETCH_SUCCESS':
      let updatedUsers;
      if (action.data) {
        updatedUsers = action.data.reduce((prev, curr) => {
          prev[curr.id] = curr
          return prev
        }, state.users)
      }
      return {
        state: state,
        users: updatedUsers ? updatedUsers : state.users
      }
    case 'USERS_FETCH_CACHED':
      return state
    default:
      return state
  }
}
