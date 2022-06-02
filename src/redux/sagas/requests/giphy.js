import axios from 'axios';


export function getTrendingGify(){
return axios.request({
    method:"get",
    url:"https://api.giphy.com/v1/gifs/trending",
    params:{
        api_key:"LwCTfUQGCqOnL6ncWdeL4CldkMlRV7Je"
    }
})
}

export function getSearchedGify(action){
    const {data} = action;
    return axios.request({
        method:"get",
        url:"https://api.giphy.com/v1/gifs/search",
        params:{
            api_key:"LwCTfUQGCqOnL6ncWdeL4CldkMlRV7Je",
            q: data
        },
        limit:50
    })
 }