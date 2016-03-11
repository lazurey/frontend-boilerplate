
import { createAction } from 'redux-actions'
import userApi from '../api/user'

export const LOGIN = 'send email for verify'
export const VERIFY = 'verify email and login'

export const login = createAction(LOGIN, (email) => userApi.login(email))
export const verify = createAction(VERIFY, () => userApi.verify())
