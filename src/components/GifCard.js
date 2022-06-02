import {React} from 'react';
import './GifCard.css';

function GifCard(props) {
  return (
    <div ref={props.refs} className='Gif-card'>
      <img class="gif" src={props.Gifs.images.fixed_height_small.webp} width="200" height={props.Gifs.images.fixed_height.height}/>
    </div>
  )
}

export default GifCard;