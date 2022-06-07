import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getTrendingGify, getSearchedGify} from "./redux/ducks/giphy";
import GifCard from './components/GifCard';
import {debounce, getItemsFromArray} from './utils/helper';
import AppLogic from './hooks/App/appLogic';

function App() {
const{ query,setQuery,paginatedGifs,setPaginatedGifs,currentPage,setCurrentPage,indexOfLastItem,indexOfFirstItem,theme,handleThemeToggle,gifs,lastGifRefElement,
}= AppLogic();

const dispatch=useDispatch();

 useEffect(()=>{
    dispatch(getTrendingGify());
},[]);

useEffect(()=>{
  const data = gifs.data.data ? getItemsFromArray(indexOfFirstItem,indexOfLastItem,gifs.data.data):[];
  setPaginatedGifs([...paginatedGifs,...data])
},[currentPage,gifs]);

const handleSearch=(e)=>{
  setQuery(e.target.value);
  setCurrentPage(1);
  setPaginatedGifs([]);
  const betterHandleSearch = debounce(()=>dispatch(getSearchedGify(query)),500);
  betterHandleSearch();
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
      </div>
    </div>
  );
}

export default App;