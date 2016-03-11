import { apiServer, getJson } from './'

export default {
  login: (email) => {
    console.log(email)
    console.log(apiServer)
    // return getJson(`${apiServer}/login`)
    return {
      email,
      token: 'api_return_token'
    }
  },
  verify: () => getJson(`${apiServer}/verify`)
}
