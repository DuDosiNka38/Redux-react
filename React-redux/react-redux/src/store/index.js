import {createStore, combineReducers, applyMiddleware} from 'redux'
import { cash } from './cashReducer'
import { comment } from './commentReducer'
import {composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { WatcherComments } from '../asycSaga/asyc'


const SagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    cash: cash,
    comment: comment

})

export const store = createStore(rootReducer, applyMiddleware(SagaMiddleware))

SagaMiddleware.run(WatcherComments)