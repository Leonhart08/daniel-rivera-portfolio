import { useTranslation } from 'react-i18next';
import { BsMusicNoteList } from 'react-icons/bs';

import { FadeInOnScroll } from './../components/observers/fadeInOnScroll'

import { Player } from './common/Player';
import { Box } from './common/Box'

export const ComposerPortfolio = () => {

  const { t } = useTranslation()

  const workInProgress = true

  return (
    <FadeInOnScroll>
      <div className='portfolio portfolio-composer'>
        <Box>
          <div className='portfolio__wrapper'>
          <div className='songs__container'>
            {workInProgress 
              ? <div className='songs__list'>
                  <Player img='placeholder.png'  songTitle='Song #0001' albumTitle='Album A' />
                  <Player img='placeholder.png' songTitle='Song #0002' albumTitle='Album B'  />
                  
               </div>
              : (
                <div className='songs__list'>
                  <Player img='cover_1.jpg' />
                  <Player img='cover_2.jpg'  />
                  <Player img='cover_3.jpg'  />
                </div>
              )
            }
            </div>
            <div className='portfolio__content'>
              <div className='portfolio__title'>
                <h3> { t('as-a-composer.title.0') } </h3>
                <div> <BsMusicNoteList /> </div>
                <h3> { t('as-a-composer.title.1') } </h3>
              </div>
              <div className='portfolio__text'>
                <div> {t('as-a-composer.content')} </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </FadeInOnScroll>
  )
}
