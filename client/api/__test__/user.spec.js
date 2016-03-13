import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import userApi from '../user'

describe('User Login API', () => {
  const loginApi = `${apiServer}/login`
  const email = 'test@thoughtworks.com'

  it('should be able to get a Promise', () => {
    userApi.login(email).then.should.be.a.Function
    userApi.verify().then.should.be.a.Function
  })


  it('should get an object response', (done) => {
    fetchMock.reMock(loginApi, 'GET', {})
    userApi.login(email).then(response => {
      response.should.be.Existed
      response.should.be.a.Object
      done()
    })
  })
})
