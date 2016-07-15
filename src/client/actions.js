export function getKyoodos(user_or_group_id=null) {
  return {
    type: 'KYOODOS_GET',
    user_or_group_id
  }
}

export function getLastCreatedKyoodo() {
  return {
    type: 'KYOODOS_GET_LAST_CREATED'
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

// api fetch helpers
function fetchApiRequest(url) {
  return {
    type: 'FETCH_API_REQUEST',
    url
  }
}

function fetchApiSuccess(resp, api) {
  return {
    type: 'FETCH_API_SUCCESS',
    resp,
    api
  }
}

function fetchApiFailure(ex) {
  return {
    type: 'FETCH_API_FAILURE',
    ex
  }
}

export function fetchApi(path) {
  return dispatch => {
  }
}
