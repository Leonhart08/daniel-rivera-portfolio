import PropTypes from 'prop-types';

import { FaPlay } from 'react-icons/fa';

export const Player = ({ songTitle, albumTitle, img }) => {

  return ( 
    <div className='player'>
      <div className='player__thumbnail'>
        <img src={`${img}`} />
        <div className='player__button'> <FaPlay /></div>
      </div>
      <div className='player__content'>
        <div className='player__content-title'> { songTitle } </div>
        <div className='player__content-author'> { albumTitle } </div>
      </div>
    </div>
  )
}

Player.propTypes = {
  songTitle: PropTypes.string,
  albumTitle: PropTypes.string,
  img: PropTypes.string
};
