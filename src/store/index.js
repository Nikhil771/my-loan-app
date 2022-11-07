import { applyMiddleware, createStore,compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
import createRootReducer from '../reducers'
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export { store }
