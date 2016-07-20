
const initialState = {
  kyoodos: [],
  users: {}
}

export default function kyoodos(state=initialState, action) {
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
      let updatedUsers = action.data.reduce((prev, curr) => {
        prev[curr.id] = curr
        return prev
      }, state.users)
      return {
        state: state,
        users: updatedUsers
      }
    default:
      return state
  }
}
