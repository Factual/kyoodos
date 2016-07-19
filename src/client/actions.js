import { API_ENDPOINTS } from './consts'
import fetch from 'isomorphic-fetch'


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
  return dispatch => {
    dispatch({ type: 'USERS_FETCH' })
    return fetchUsers(user_ids).then(function(resp) {
       if (resp.status >= 400) {
          dispatch({ type: 'USERS_FETCH_ERROR', error })
       } else {
         return resp.json()
       }
    }).then(function(data) {
      dispatch({ type: 'USERS_FETCH_SUCCESS', data })
    })
  }
}

export function getKyoodosAndUsers() {
  return (dispatch, getState) => {
    return dispatch(getKyoodos()).then(() => {
      const fetchedKyoodos = getState().kyoodos.kyoodos
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

function parseKyoodos(kyoodosArr) {
  let user_ids = {}
  kyoodosArr.forEach((kyoodo) => {
    let ids = parseKyoodo(kyoodo)
    for(var i=0;i<ids.length;i++) {
      user_ids[ids[i]] = true 
    } 
  })
  return Object.keys(user_ids)
}

function parseKyoodo(kyoodo) {
  var res = {},
      users = {},
      matches = kyoodo.content.match(/<@.{9}>/g) || [],
      receiverIds = matches.map(function (m) {
        return m.match(/<@(.{9})>/)[1];
      }),
      userIds = receiverIds.concat([kyoodo.from_user_id]);
  return userIds
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

