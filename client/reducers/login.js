
import { handleActions } from 'redux-actions'
import { LOGIN, VERIFY } from '../actions/login'

const initialState = {
  login: false,
  email: '',
  token: ''
}

const loginReducer = handleActions({
  [LOGIN]: (state = {}, action) => {
    // const { payload } = action
    // console.log('in reducer')
    // console.log(payload)
    // return {
    //   login: true,
    //   email: payload.code,
    //   token: payload.msg
    // }

    return action.payload

  },
  [VERIFY]: (state = {}, action) => {
    return {
      login: true,
      email: 'verify@tw.com',
      token: 'token_writen_in_reducer_verify'
    }
  }
}, initialState)

export default loginReducer
