import { API_ENDPOINTS } from './consts'
import fetch from 'isomorphic-fetch'


export function getLastCreatedKyoodo() {
  return {
    type: 'KYOODOS_GET_LAST_CREATED'
  }
}

export function getUser(user_id=null) {
  return {
    type: 'USER_GET',
    user_id
  }
}

export function getGroup(group_id=null) {
  return {
    type: 'GROUP_GET',
    user_id
  }
}

export function fetchKyoodos(user_or_group_id=null) {
  let url = API_ENDPOINTS['kyoodos'];
  return fetchApi(url, fetchKyoodosSuccess)
}

function fetchKyoodosSuccess(data) {
  return {
    type: 'KYOODOS_FETCH_SUCCESS',
    data
  }
}

function fetchApi(url, cb) {
  return dispatch => {
    dispatch(fetchApiRequest(url))
    return fetch(url)
      .then(function(resp) {
        if (resp.status >= 400) {
          dispatch(fetchApiFailure(resp))
        } else {
          return resp.json()
        }
      }).then(function(data) {
          dispatch(cb(data))
      })
  }
}

// api fetch helpers
function fetchApiRequest(url) {
  return {
    type: 'FETCH_API_REQUEST',
    url
  }
}

function fetchApiFailure(err) {
  return {
    type: 'FETCH_API_FAILURE',
    err
  }
}
