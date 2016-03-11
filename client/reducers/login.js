
import { handleActions } from 'redux-actions'
import { LOGIN, VERIFY } from '../actions/login'

const initialState = {
  login: false,
  email: '',
  token: ''
}

const loginReducer = handleActions({
  [LOGIN]: (state = {}, action) => action.payload,
  [VERIFY]: (state = {}, action) => action.payload
}, initialState)

export default loginReducer
