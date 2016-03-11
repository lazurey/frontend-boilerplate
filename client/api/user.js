import { apiServer, getJson } from './'

export default {
  // login: (email) => Promise.resolve({ email, token: 'api_return_token' }),
  login: (email) => getJson(`${apiServer}/login`),
  verify: () => getJson(`${apiServer}/verify`)
}
