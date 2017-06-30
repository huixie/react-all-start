import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger, router, reduxRouterMiddlemare } from 'reduxdir/middleware'
import rootReducer from 'reduxdir/reducers'

const nextReducer = require('reduxdir/reducers')

export default function configure (initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore
  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddlemare,
    thunkMiddleware,
    logger,
    router
  )(create)
  const store = createStoreWithMiddleware(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('reduxdir/reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
