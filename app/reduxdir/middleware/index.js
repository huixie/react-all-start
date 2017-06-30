/*
 * @Author: huixie
 * @Date: 2017-06-29 20:13:31
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-30 11:05:20
 */

import { routerMiddleware } from 'react-router-redux'
import logger from './logger'
import router from './router'
import history from 'utils/history'

const reduxRouterMiddlemare = routerMiddleware(history)

export { reduxRouterMiddlemare, logger, router }
