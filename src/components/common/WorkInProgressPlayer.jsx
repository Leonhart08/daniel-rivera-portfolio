import { FaPlay, FaCompactDisc } from 'react-icons/fa';

export const WorkInProgressPlayer = () => {
  return ( 
    <div className='player player--wip'>
      <div className='player__thumbnail'>
        <div>
          <FaCompactDisc />
        </div>
        <div className='player__button'> <FaPlay /></div>
      </div>
      <div className='player__content'>
        <div className='player__content-title'> Title Name </div>
        <div className='player__content-author'> Album Name </div>
      </div>
    </div>
  )
}
