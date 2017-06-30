/*
 * @Author: huixie
 * @Date: 2017-06-30 10:07:06
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-30 10:11:44
 */
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state
})

export default rootReducer
