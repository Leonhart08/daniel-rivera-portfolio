import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Button } from './../common/Button';
import { BsMusicNote } from 'react-icons/bs'
export const Presentation = ({ handleScroll }) => {
  const { t } = useTranslation()
  
  return (
    <div className="section-container">
      <div className='presentation'>
        <div className='presentation__container'>
          <h1> { t('presentation.greetings') } </h1>
          <h2> Daniel Rivera. </h2>
          <span> <Trans 
              i18nKey='presentation.content'
              components={[<BsMusicNote  key='first' />]}
            /> </span>
          <div className='presentation__circle'></div>
          <div>
            <Button text='About Me' size='large' handleClick={() => handleScroll('about-me')} />
          </div>
        </div>
      </div>
    </div>
  )
}

Presentation.propTypes = {
  handleScroll: PropTypes.func
};