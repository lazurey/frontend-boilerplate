
import { handleActions } from 'redux-actions'

const initialState = {
  login: false,
  email: ''
}

export default handleActions({
  'login and verify email' (state, action) {
    return {
      login: true,
      email: action.payload
    }
  }
}, initialState)
