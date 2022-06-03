import axios from 'axios';


export function getTrendingGify(){
return axios.request({
    method:"get",
    url:"https://api.giphy.com/v1/gifs/trending",
    params:{
        api_key:process.env.REACT_APP_GIFY_KEY
    }
})
}

export function getSearchedGify(action){
    const {data} = action;
    return axios.request({
        method:"get",
        url:"https://api.giphy.com/v1/gifs/search",
        params:{
            api_key:process.env.REACT_APP_GIFY_KEY,
            q: data
        },
        limit:50
    })
 }