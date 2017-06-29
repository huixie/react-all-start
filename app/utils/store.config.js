import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger, router, reduxRouterMiddlemare } from 'redux/middleware'
import rootReducer from 'redux/reducers'

const nextReducer = require('redux/reducers')

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
    module.hot.accept('redux/reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
