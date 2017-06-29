/*
 * @Author: huixie
 * @Date: 2017-06-29 18:21:11
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-29 20:36:08
 */

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWidhStore } from 'react-router-redux'
import routers from 'utils/router'
import storeConfig from 'utils/store.config'
import myhistory from 'utils/history'
import './app.config'

const store = storeConfig({ config: global.$GLOBALCONFIG })
const history = syncHistoryWidhStore(myhistory, store)
history.listen(location => location)

ReactDOM.render(
  <Provider>
    <Router history={history}>
      {routers}
    </Router>
  </Provider>,
  document.getElementById('app')
)
