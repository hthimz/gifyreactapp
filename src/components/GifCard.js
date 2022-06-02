import {React} from 'react';
import './GifCard.css';

function GifCard(props) {
  return (
    <div ref={props.refs} className='Gif-card'>
      <img  src={props.Gifs.images.downsized_still.url}
       width="200" height={props.Gifs.images.fixed_height.height}
       onMouseOver={e => (e.currentTarget.src =`${props.Gifs.images.fixed_height_small.webp}`)}
    onMouseOut={e => (e.currentTarget.src =`${props.Gifs.images.downsized_still.url}`)}
       />
    </div>
  )
}

export default GifCard;