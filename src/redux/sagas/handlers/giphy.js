import {call,put}from "redux-saga/effects";
import {getTrendingGify, getSearchedGify} from "../requests/giphy";
import {setTrendingGify, setLoadingTrue, setLoadingFalse} from "../../ducks/giphy";


export function* handleGetTrendingGify(action){
 try{
     yield put(setLoadingTrue());
    const response = yield call(getTrendingGify,action);
    const {data} = response;
    yield put(setTrendingGify(data));
    yield put(setLoadingFalse());
 }catch(error){
     console.log("Error",error);
     //Error Handler here
 }
}


export function* handleSearchedGify(action){
 try{
    yield put(setLoadingTrue());
     const response = yield call(getSearchedGify,action);
     const {data} = response;
     yield put(setTrendingGify(data));
    yield put(setLoadingFalse());
 }catch(error){
     console.log("Error",error);
     //Error Handler here
 }
}