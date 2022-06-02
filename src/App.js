import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef, useCallback, useContext } from 'react';
import {getTrendingGify, getSearchedGify} from "./redux/ducks/giphy";
import GifCard from './components/GifCard';
import {debounce, throttle, getItemsFromArray} from './utils/helper';
import ThemeContext,{themes} from './utils/theme-context';

function App() {
const dispatch=useDispatch();
// const theme= useContext(ThemeContext);
const [theme,setTheme]= useState(themes.dark);
const gifs = useSelector(state=>state.giphy);
const[paginatedGifs,setPaginatedGifs]=useState([]);
const[loading,setLoading]=useState(false);
const[currentPage, setCurrentPage]=useState(1);
const[itemsPerPage,setitemsPerPage]=useState(25);

const indexOfLastItem = currentPage*itemsPerPage ;
const indexOfFirstItem= indexOfLastItem - itemsPerPage;


// page 1 - items 1-25
//page 2 - items 26-50


const[query,setQuery]=useState('');


const observer= useRef();
const lastGifRefElement= useCallback(node=>{
  // if(loading) return
  if(observer.current) observer.current.disconnect()
  observer.current= new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
      setCurrentPage(currentPage+1);
    }
  })
  if(node) observer.current.observe(node);
},
// [] Deps can be added here
)

 useEffect(()=>{
    dispatch(getTrendingGify());
},[]);

useEffect(()=>{
  const data = gifs.data.data ? getItemsFromArray(indexOfFirstItem,indexOfLastItem,gifs.data.data):[];
  setPaginatedGifs([...paginatedGifs,...data])
},[currentPage, gifs]);

const handleThemeToggle=()=>{
return theme ===themes.dark? setTheme(themes.light) : setTheme(themes.dark);
}


const renderGifCards=()=>{
    // const data =gifs.data.data ? getItemsFromArray(indexOfFirstItem,indexOfLastItem,gifs.data.data) : [];
    return paginatedGifs.map((el,index)=>{
      if(paginatedGifs.length === index+1){
        return <GifCard refs={lastGifRefElement} key={el.id} Gifs={el}/>
      }else{
        return <GifCard key={el.id} Gifs={el}/>
      }
    });
  }

  useEffect(()=>{
    setCurrentPage(1);
    setPaginatedGifs([]);
    const betterHandleSearch = debounce(()=>dispatch(getSearchedGify(query)),500);
    betterHandleSearch();
  },[query])

  const handleSearch=(e)=>{
    setQuery(e.target.value);
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
