import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import userApi from '../user'

describe('User Login API', () => {
  const loginApi = `${apiServer}/login`

  it('should be able to get a Promise', () => {
    userApi.login().then.should.be.a.Function
    userApi.verify().then.should.be.a.Function
  })
  
})
