import { useState, useRef, useCallback } from "react";
import { themes } from "../../utils/theme-context";
import { useSelector } from 'react-redux';

const AppLogic=()=>{

const gifs = useSelector(state=>state.giphy);
const[query,setQuery]=useState('');
const[paginatedGifs,setPaginatedGifs]=useState([]);
const[currentPage, setCurrentPage]=useState(1);
const[itemsPerPage,setitemsPerPage]=useState(50);
const indexOfLastItem = currentPage*itemsPerPage ;
const indexOfFirstItem= indexOfLastItem - itemsPerPage;
const [theme,setTheme]= useState(themes.dark);
const [searcheGifsTouched, setsearcheGifsTouched]= useState(false);
const offsetValue= itemsPerPage * (currentPage-1);


// pagination.totalcount - offset <50
const observer= useRef();
const lastGifRefElement= useCallback(node=>{
  if(observer.current) observer.current.disconnect()
  if(gifs.data.data.length && !gifs.loading){
  observer.current= new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting&& gifs.data.data.length){
      setCurrentPage(currentPage+1);
    }
  })

  if(node) observer.current.observe(node);
  }

},[indexOfLastItem,gifs]
// [] Deps can be added here
)

const handleThemeToggle=()=>{
    return theme ===themes.dark? setTheme(themes.light) : setTheme(themes.dark);
    }
return {
    query,
    setQuery,
    paginatedGifs,
    setPaginatedGifs,
    currentPage, 
    setCurrentPage,
    itemsPerPage,
    indexOfLastItem,
    indexOfFirstItem,
    theme,
    setTheme,
    handleThemeToggle,
    gifs,
    lastGifRefElement,
    searcheGifsTouched, 
    setsearcheGifsTouched
}
}


export default AppLogic;