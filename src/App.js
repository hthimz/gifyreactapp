import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getTrendingGify, getSearchedGify, resetGifData} from "./redux/ducks/giphy";
import GifCard from './components/GifCard';
import {debounce, getItemsFromArray} from './utils/helper';
import AppLogic from './hooks/App/appLogic';

function App() {
const{ query,setQuery,paginatedGifs,setPaginatedGifs,currentPage,setCurrentPage,itemsPerPage, indexOfLastItem,indexOfFirstItem,theme,handleThemeToggle,gifs,lastGifRefElement,
  searcheGifsTouched, setsearcheGifsTouched }= AppLogic();
const dispatch=useDispatch();

useEffect(()=>{
  let offsetValue= itemsPerPage * (currentPage-1)
  if(query==='' && searcheGifsTouched){
    dispatch(getTrendingGify({offset : offsetValue}))
  }else{
    let action = searcheGifsTouched ? getSearchedGify : getTrendingGify ;
    dispatch(action(searcheGifsTouched ? {offset : offsetValue,query}:{offset : offsetValue}));
  }
},[currentPage]);

useEffect(()=>{
if(searcheGifsTouched && query===''){
  dispatch(getTrendingGify({offset : 0}));
}
},[query])

useEffect(()=>{
  const data = gifs.data.data ? getItemsFromArray(indexOfFirstItem,indexOfLastItem,gifs.data.data):[];
  setPaginatedGifs([...paginatedGifs,...data])
},[currentPage,gifs]);

const handleSearch=(e)=>{
  setQuery(e.target.value);
  dispatch(resetGifData());
  setCurrentPage(1);
  setPaginatedGifs([]);
  setsearcheGifsTouched(true);
  const betterHandleSearch = debounce(()=>dispatch(getSearchedGify({query:e.target.value,offset:0})),500);
  query!==''&&betterHandleSearch();
}

const renderGifCards=()=>{
    return paginatedGifs.map((el,index)=>{
      if(paginatedGifs.length === index+1){
        return <GifCard refs={lastGifRefElement} key={el.id} Gifs={el}/>
      }else{
        return <GifCard key={el.id} Gifs={el}/>
      }
    });
  }
  return (
    <div style={theme}>
      <div className='Navbar-container'>
      <input  placeholder='Search Gifs' value={query} type="text" onChange={handleSearch}/>
      <button onClick={handleThemeToggle} >Toggle Theme</button>
      </div>
      <div className="Gif-conatiner">
      {renderGifCards()}
      {gifs.loading ? <div className='Loading-gif'>Loading ....</div>: null}
      </div>
    </div>
  );
}

export default App;