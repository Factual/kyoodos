import { API_ENDPOINTS } from './consts'
import fetch from 'isomorphic-fetch'
import { parseKyoodos } from './utils'

export function getKyoodos() {
  return dispatch => {
    dispatch({ type: 'KYOODOS_FETCH' })
    return fetchKyoodos().then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'KYOODOS_FETCH_ERROR', resp })
      } else {
        return resp.json()
      }
    }).then(function(data) {
      dispatch({ type: 'KYOODOS_FETCH_SUCCESS', data })
    })
  }
}

export function getKyoodoReceivers(kudo_id) {
  return (dispatch) => {
    dispatch({ type: 'USERS_FETCH' })
    return fetchKyoodoReceivers().then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'USERS_FETCH_ERROR', resp })
      } else {
        return resp.json()
      }
    }).then(function(data) {
      dispatch({ type: 'KYOODOS_RECEIVERS_FETCH_SUCCESS', data })
    })
  }
}

export function getFromKyoodos(user_id) {
  return (dispatch) => {
    dispatch({ type: 'KYOODOS_FROM_FETCH' })
    return fetchFromKyoodos(user_id).then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'KYOODOS_FROM_FETCH_ERROR', resp })
      } else {
        return resp.json()
      }
    }).then(function(from) {
      dispatch({ type: 'KYOODOS_FROM_FETCH_SUCCESS', from })
    })
  }
}
export function getToKyoodos(user_id) {
  return (dispatch) => {
    dispatch({ type: 'KYOODOS_TO_FETCH' })
    return fetchToKyoodos(user_id).then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'KYOODOS_TO_FETCH_ERROR', resp })
      } else {
        return resp.json()
      }
    }).then(function(to) {
      dispatch({ type: 'KYOODOS_TO_FETCH_SUCCESS', to})
    })
  }
}

function getLastSent(user_id) {
  return (dispatch) => {
    dispatch({ type: 'KYOODOS_FETCH' })
    return fetchLastKyoodoToOrFromUser(user_id, 'from').then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'KYOODOS_FETCH_ERROR', resp })
      } else {
        return resp.json()
      }
    }).then(function(data) {
      dispatch({ type: 'KYOODOS_LAST_SENT_BY_USER', data })
    })
  }
}

function getLastReceived(user_id) {
  return (dispatch) => {
    dispatch({ type: 'KYOODOS_FETCH' })
    return fetchLastKyoodoToOrFromUser(user_id, 'to').then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'KYOODOS_FETCH_ERROR', resp })
      } else {
        return resp.json()
      }
    }).then(function(data) {
      dispatch({ type: 'KYOODOS_LAST_RECEIVED_BY_USER', data })
    })
  }
}

function fetchLastKyoodoToOrFromUser(user_id, to_or_from) {
  let url = API_ENDPOINTS['kyoodos']
  url += '/' + user_id + '/' + to_or_from
  return fetch(url)
}

export function getAllUsers() {
  return (dispatch) => {
    dispatch({ type: 'USERS_FETCH' })
    return fetchUsers().then(function(resp) {
      if (resp.status >= 400) {
        dispatch({ type: 'USERS_FETCH_ERROR', error })
      } else {
        return resp.json()
      }
    }).then(function(data) {
      dispatch({ type: 'USERS_FETCH_ALL_SUCCESS', data})
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

export function getUsersAndLastReceivedKyoodo() {
  return (dispatch, getState) => {
    return dispatch(getAllUsers()).then(() => {
      const fetchedUsers = getState().data.users
      const userIds = Object.keys(fetchedUsers)
      userIds.forEach((id) => {
        return dispatch(getLastReceived(id))
      })
    })
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

function fetchKyoodoReceivers(kudo_id) {
  let url = API_ENDPOINTS['kyoodos']
  url += '/' + kudo_id + '/to'
  return fetch(url)
}

function fetchFromKyoodos(user_id) {
  let url = API_ENDPOINTS['kyoodos']
  url += '/' + user_id + '/from'
  return fetch(url)
}
function fetchToKyoodos(user_id) {
  let url = API_ENDPOINTS['kyoodos']
  url += '/' + user_id + '/to'
  return fetch(url)
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
