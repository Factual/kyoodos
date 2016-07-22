
const initialState = {
  kyoodos: [],
  users: {},
  allUsers: {}
}

export default function data(state=initialState, action) {
  switch(action.type) {
    case 'KYOODOS_FETCH':
      return state
    case 'KYOODOS_FETCH_ERROR':
      return state
    case 'KYOODOS_FETCH_SUCCESS':
      return {
        kyoodos: [...action.data],
        allUsers: state.allUsers,
        users: state.users
      }
    case 'USERS_FETCH_ALL_SUCCESS':
      return {
        kyoodos: state.kyoodos,
        allUsers: action.data,
        users: state.users
      }
    case 'USERS_FETCH_ERROR':
      return state
    case 'USERS_FETCH_SUCCESS':
      let updatedUsers;
      if (action.data) {
        updatedUsers = action.data.reduce((prev, curr) => {
          prev[curr.id] = curr
          return prev
        }, state.users)
      }
      return {
        kyoodos: state.kyoodos,
        allUsers: state.allUsers,
        users: updatedUsers ? updatedUsers : state.users
      }
    case 'USERS_FETCH_CACHED':
      return state
    default:
      return state
  }
}
