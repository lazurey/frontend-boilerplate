import { apiServer, getJson } from './'

export default {
  login: (email) => Promise.resolve({ email, token: 'api_return_token' }),
  verify: () => getJson(`${apiServer}/verify`)
}
