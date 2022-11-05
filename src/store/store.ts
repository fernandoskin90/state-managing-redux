import { rootReducer } from '@/redux'
import { rootSaga } from '@/sagas'
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), composeEnhancers())
)

sagaMiddleware.run(rootSaga)

export default store
