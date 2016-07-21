import { API_ENDPOINTS } from './consts'
import fetch from 'isomorphic-fetch'
import { parseKyoodos } from './utils'


export function getKyoodos() {
  return dispatch => {
    dispatch({ type: 'KYOODOS_FETCH' })
    return fetchKyoodos().then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'KYOODOS_FETCH_ERROR', resp})
      } else {
        return resp.json()
      }
    }).then(function(data) {
      dispatch({ type: 'KYOODOS_FETCH_SUCCESS', data })
    })
  }
}

export function getUsers(user_ids) {
  return (dispatch, getState) => {
    dispatch({ type: 'USERS_FETCH' })
    const cachedUsers = Object.keys(getState().data.users)

    let uncachedUsers = user_ids.filter((uid) => { return cachedUsers.indexOf(uid) < 0 })
    if (uncachedUsers.length > 0) {
      return fetchUsers(user_ids).then(function(resp) {
         if (resp.status >= 400) {
            dispatch({ type: 'USERS_FETCH_ERROR', error })
         } else {
           return resp.json()
         }
      }).then(function(data) {
        dispatch({ type: 'USERS_FETCH_SUCCESS', data })
      })
    } else {
      dispatch({ type: 'USERS_FETCH_SUCCESS', cachedUsers})
    }
  }
}

export function getKyoodosAndUsers() {
  return (dispatch, getState) => {
    return dispatch(getKyoodos()).then(() => {
      const fetchedKyoodos = getState().data.kyoodos
      const userIds = parseKyoodos(fetchedKyoodos) // returns an array of ids
      return dispatch(getUsers(userIds))
    })
  }
}

export function getLastCreatedKyoodo() {
  return {
    type: 'KYOODOS_GET_LAST_CREATED'
  }
}

function fetchUsers(user_ids) {
  let url = API_ENDPOINTS['users']
  // TO DO - get users from list of users
  if (user_ids) {
    url += '/' + user_ids
  }
  return fetch(url)
}

function fetchKyoodos() {
  let url = API_ENDPOINTS['kyoodos'];
  return fetch(url)
}
