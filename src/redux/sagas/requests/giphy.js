import axios from 'axios';


export function getTrendingGify(){
return axios.request({
    method:"get",
    url:"https://api.giphy.com/v1/gifs/trending"
})
}

export function getSearchedGify(action){
    const {data} = action;
    return axios.request({
        method:"get",
        url:"https://api.giphy.com/v1/gifs/search",
        params:{
            q: data
        }
        //default response for beta user is 50 only
    })
 }