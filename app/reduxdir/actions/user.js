import { createAction } from 'redux-actions'
import { user } from 'reduxdir/api'
import { createAjaxAction } from 'utils/public'

// 获取用户信息
export const requestUserList = createAction('request user list')
export const receiveUserList = createAction('receive user list')
export const fetchUserList = createAjaxAction(
  user.getUserList,
  requestUserList,
  receiveUserList
)
