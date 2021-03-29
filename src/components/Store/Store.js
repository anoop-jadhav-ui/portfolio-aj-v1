import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mySaga from './Saga'
import DataReducer from './Reducers/DataReducer'
import FeedbackReducer from './Reducers/FeedbackReducer'

let combinedReducers = combineReducers({
    dr: DataReducer,
    fr : FeedbackReducer
})

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
const Store = createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default Store;