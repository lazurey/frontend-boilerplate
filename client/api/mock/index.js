import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import user from './user.json'

fetchMock
  .mock(`${apiServer}/login`, 'GET', user[0])
  .mock(`${apiServer}/verify`, 'GET', user[0])
