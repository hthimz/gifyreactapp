import { combineReducers, createStore,applyMiddleware } from "redux";
import giphyReducer from './ducks/giphy';
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    giphy : giphyReducer
})
const sagaMiddleware= createSagaMiddleware();
const middleware = [sagaMiddleware];
const store=createStore(reducer,{},applyMiddleware(...middleware)); // 2nd param is enhancer

sagaMiddleware.run(watcherSaga);
export default store;