/*
 * @Author: huixie
 * @Date: 2017-06-30 10:07:06
 * @Last Modified by: huixie
 * @Last Modified time: 2017-07-04 18:16:00
 */
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import * as user from './user'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...user // 用户管理模块
})

export default rootReducer
