let server
let token = 'initial'

/* istanbul ignore if */
if (global.location &&
  /* istanbul ignore next */
  global.location.origin) {
  server = global.location.origin
} else if (process.env.NODE_ENV === 'development') {
  /* istanbul ignore next */
  server = ''
} else {
  server = 'http://0.0.0.0:3000'
}

export const serverAddress = server
export const apiServer = `${server}/api`

/*
  ensure
  /api/me/*
  /api/admin/*
  have the auth header
*/
// const isNeedAuth = /api\/((me)|(admin)|(sms))/i

/* istanbul ignore next */
export const postJson = (url, data = {}) => {
  let postData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // if (token && isNeedAuth.test(url)) {
  //   postData = Object.assign(postData, prepareHeader())
  // }
  return fetch(url, Object.assign(postData, {
    body: JSON.stringify(data)
  }))
  .then(checkStatus)
  .then(fetchJson)
}

/* istanbul ignore next */
export const putJson = (url, data = {}) => {
  let postData = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // if (token && isNeedAuth.test(url)) {
  //   postData = Object.assign(postData, prepareHeader())
  // }
  return fetch(url, Object.assign(postData, {
    body: JSON.stringify(data)
  }))
  .then(checkStatus)
  .then(fetchJson)
}

/* istanbul ignore next */
export const getJson = (url) => {
  let postData = {
    method: 'GET'
  }
  // if (token && isNeedAuth.test(url)) {
  //   postData = Object.assign(postData, prepareHeader())
  // }
  return fetch(url, postData)
    .then(checkStatus)
    .then(fetchJson)
}

/* istanbul ignore next */
const checkStatus = response => {
  if (response.status >= 200 && response.status < 400) {
    return response
  }
  throw response
}

/* istanbul ignore next */
const fetchJson = response => {
  try {
    return response.json()
  } catch (e) {
    return Promise.resolve({})
  }
}

/* istanbul ignore next */
const prepareHeader = () => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ['Bearer ', token].join('')
  }
})
