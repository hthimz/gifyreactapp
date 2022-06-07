import {call,put}from "redux-saga/effects";
import {getTrendingGify, getSearchedGify} from "../requests/giphy";
import {setTrendingGify} from "../../ducks/giphy";


export function* handleGetTrendingGify(action){
 try{
     const response = yield call(getTrendingGify);
     const {data} = response;
     yield put(setTrendingGify(data));
 }catch(error){
     console.log("Error",error);
     //Error Handler here
 }
}


export function* handleSearchedGify(action){
 try{
     const response = yield call(getSearchedGify,action);
     const {data} = response;
     yield put(setTrendingGify(data));
 }catch(error){
     console.log("Error",error);
     //Error Handler here
 }
}