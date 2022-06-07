import { useState, useRef, useCallback } from "react";
import { themes } from "../../utils/theme-context";
import { useSelector } from 'react-redux';

const AppLogic=()=>{

const gifs = useSelector(state=>state.giphy);
const[query,setQuery]=useState('');
const[paginatedGifs,setPaginatedGifs]=useState([]);
const[currentPage, setCurrentPage]=useState(1);
const[itemsPerPage,setitemsPerPage]=useState(25);
const indexOfLastItem = currentPage*itemsPerPage ;
const indexOfFirstItem= indexOfLastItem - itemsPerPage;
const [theme,setTheme]= useState(themes.dark);

const observer= useRef();
const lastGifRefElement= useCallback(node=>{
  if(observer.current) observer.current.disconnect()
  if(gifs.data.data && gifs.data.data.length>=indexOfLastItem){
  observer.current= new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting&& gifs.data.data){
      setCurrentPage(currentPage+1);
    }
  })
  }
  if(node) observer.current.observe(node);

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
    lastGifRefElement
}
}


export default AppLogic;