import { rootReducer } from '@/redux'
import { rootSaga } from '@/sagas'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
