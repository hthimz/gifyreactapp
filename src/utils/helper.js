
export const getItemsFromArray=(firstIndex,lastIndex,arr)=>{
return arr.slice(firstIndex,lastIndex);
}

let functionToBeCalledAgain=true;
export const throttle = (dispatch,action,params, time) => {
return ()=>{
    if(functionToBeCalledAgain){
        dispatch(action(params))
        functionToBeCalledAgain = false;
    setTimeout(()=>{
            functionToBeCalledAgain =true;
        },time);
    }
}};

var timer;
var count=0;
export function debounce(func, timeout = 300){
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
         }, timeout);
    };
  }
