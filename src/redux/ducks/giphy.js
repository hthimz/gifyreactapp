export const GET_TRENDING_GIF="GET_TRENDING_GIF";
export const SET_TRENDING_GIF="SET_TRENDING_GIF";

export const GET_SEARCHED_GIF="GET_SEARCHED_GIF";
export const SET_SEARCHED_GIF="SET_SEARCHED_GIF";

export const GET_PAGINATED_GIF="GET_PAGINATED_GIF";

export const IS_LOADING_TRUE="IS_LOADING_TRUE";
export const IS_LOADING_FALSE="IS_LOADING_FALSE";

export const RESET_GIF_DATA="RESET_GIF_DATA";


export const getTrendingGify=(data)=>({
 type: GET_TRENDING_GIF,
 data
})

export const setTrendingGify=(data)=>({
    type: SET_TRENDING_GIF,
    data
   })

export const getSearchedGify=(data)=>({
    type: GET_SEARCHED_GIF,
    data
   })

export const setLoadingTrue=()=>({
    type:IS_LOADING_TRUE
})

export const setLoadingFalse=()=>({
    type:IS_LOADING_FALSE
})

export const resetGifData=()=>({
    type:RESET_GIF_DATA
})



const initialState={
data:{
    data:[],
    meta:{},
    pagination:{}
},
loading : false
}

export default (state= initialState, action)=>{
    switch(action.type){
case SET_TRENDING_GIF:
    const {data}=action;
    return {data:{
        data : [...state.data.data , ...data.data],
        meta : {...data.meta},
        pagination : {...data.pagination}
    }
    }
case IS_LOADING_TRUE:
    return {...state, loading :true}
case IS_LOADING_FALSE:
    return {...state, loading :false}
case RESET_GIF_DATA:
    return {
        data:{
            data:[],
            meta:{},
            pagination:{}
        },
        loading : false
}

default: return state;
    }
}