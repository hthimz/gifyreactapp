import {takeLatest } from "redux-saga/effects";
import {GET_TRENDING_GIF, GET_SEARCHED_GIF} from "../ducks/giphy";
import {handleGetTrendingGify, handleSearchedGify} from "./handlers/giphy";

export function* watcherSaga(){
yield takeLatest(GET_TRENDING_GIF, handleGetTrendingGify);
yield takeLatest(GET_SEARCHED_GIF, handleSearchedGify);
}  