import axios from 'axios';


export function getTrendingGify(action){
    const {data} = action;
return axios.request({
    method:"get",
    url:"https://api.giphy.com/v1/gifs/trending",
    params:{
    offset:data.offset ? data.offset : 0
    }
})
}

export function getSearchedGify(action){
    const {data} = action;
    return axios.request({
        method:"get",
        url:"https://api.giphy.com/v1/gifs/search",
        params:{
            q: data.query,
            offset: data.offset
        }
        //default response for beta user is 50 only
    })
 }