/*
 * @Author: huixie
 * @Date: 2017-06-29 18:21:11
 * @Last Modified by: huixie
 * @Last Modified time: 2017-07-04 09:47:51
 */

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routers from 'utils/router'
import storeConfig from 'utils/store.config'
import myhistory from 'utils/history'
import './app.config'

const store = storeConfig({ config: global.$GLOBALCONFIG })
const history = syncHistoryWithStore(myhistory, store)
history.listen(location => location)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routers}
    </Router>
  </Provider>,
  document.getElementById('app')
)
