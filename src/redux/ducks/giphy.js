import { createSelector } from "reselect";
import { useDispatch, useSelector } from 'react-redux';

export const GET_TRENDING_GIF="GET_TRENDING_GIF";
export const SET_TRENDING_GIF="SET_TRENDING_GIF";

export const GET_SEARCHED_GIF="GET_SEARCHED_GIF";
export const SET_SEARCHED_GIF="SET_SEARCHED_GIF";

export const GET_PAGINATED_GIF="GET_PAGINATED_GIF";


export const getTrendingGify=()=>({
 type: GET_TRENDING_GIF
})

export const setTrendingGify=(data)=>({
    type: SET_TRENDING_GIF,
    data
   })

export const getSearchedGify=(data)=>({
    type: GET_SEARCHED_GIF,
    data
   })

// export const getPaginatedGif=(data)=>({
//     type:GET_PAGINATED_GIF,
//     data
// })

//    will comment out this for now, as we are setting the same state for Reducer
// export const setSearchedGify=(data)=>({
//     type: SET_SEARCHED_GIF,
//     data
//    })
   
   

const initialState={
data:{}
}

export default (state= initialState, action)=>{
    switch(action.type){
case SET_TRENDING_GIF:
    const {data}=action;
    // getPaginatedGif(data);
    return {...state, data};
// case  GET_PAGINATED_GIF:
//     // const gifData=state;
//     console.log("state",{...state,...action.data});
//     return {
//         ...state,action
//     }
default: return state;
    }
}

// const SelectSelf =()=> useSelector(state=>state.giphy);
// const giphySelector =SelectSelf();
// export const checkSelector= createSelector([giphySelector],state=>{
//     return console.log("The initial value is here bro",state);
// })