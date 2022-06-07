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
   
const initialState={
data:{}
}

export default (state= initialState, action)=>{
    switch(action.type){
case SET_TRENDING_GIF:
    const {data}=action;
    // getPaginatedGif(data);
    return {...state, data};
default: return state;
    }
}