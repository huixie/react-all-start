/*
 * @Author: huixie
 * @Date: 2017-06-29 20:13:31
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-29 21:17:46
 */

import { routerMiddleware } from 'react-route-redux'
import logger from './logger'
import router from './router'
import history from 'utils/history'

const reduxRouterMiddlemare = routerMiddleware(history)

export { reduxRouterMiddlemare, logger, router }
