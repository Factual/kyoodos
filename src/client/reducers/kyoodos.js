const initialState = {
  kyoodos: [],
  users: {},
  kyoodosFrom: [],
  kyoodosTo: [],
}

export default function data(state=initialState, action) {
  switch(action.type) {
    case 'KYOODOS_FROM_FETCH':
      return state
    case 'KYOODOS_FROM_FETCH_ERROR':
      return state
    case 'KYOODOS_FROM_FETCH_SUCCESS':
      return Object.assign({}, initialState, {
        kyoodosFrom: action.from
      })
    case 'KYOODOS_TO_FETCH':
      return state
    case 'KYOODOS_TO_FETCH_ERROR':
      return state
    case 'KYOODOS_TO_FETCH_SUCCESS':
      return Object.assign({}, initialState, {
        kyoodosTo: action.to
      })


    case 'KYOODOS_FETCH':
      return state
    case 'KYOODOS_FETCH_ERROR':
      return state
    case 'KYOODOS_FETCH_SUCCESS':
      return {
        kyoodos: [...action.data],
        users: state.users
      }
    case 'KYOODOS_LAST_RECEIVED_BY_USER': 
      let user = action.data.to_user_id
      let updated = {}
      updated[user] = Object.assign(state.users[user], { last_received: action.data }) 
      return {
        kyoodos: state.kyoodos,
        users: Object.assign(state.users, updated)
      }
    case 'USERS_FETCH_ALL_SUCCESS':
      return {
        kyoodos: state.kyoodos,
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
        users: updatedUsers ? updatedUsers : state.users
      }
    case 'USERS_FETCH_CACHED':
      return state
    default:
      return state
  }
}
