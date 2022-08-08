
import { AddManyCommentAction,Fetch_Comments } from "../store/commentReducer"
import {put, takeEvery, call} from 'redux-saga/effects' 


const FetchComments = () => fetch('https://jsonplaceholder.typicode.com/comments')

function* WorkerComments(){ 
const data = yield call(FetchComments)
const json = yield call(() => new Promise(res => res(data.json())))
yield put(AddManyCommentAction(json))
}


export function* WatcherComments(){
  yield takeEvery(Fetch_Comments, WorkerComments)
}