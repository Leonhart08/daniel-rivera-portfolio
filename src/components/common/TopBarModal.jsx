import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button'
import { AiOutlineYoutube, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

export const TopBarModal = ({ sectionsList, handleClick, handleCloseModal }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { t } = useTranslation()
  const ref = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => (ref.current && !ref.current.contains(event.target)) && handleCloseModal()

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, handleCloseModal])

  return (
    <> 
      <div className={`topbar__modal-container ${isMounted ? `topbar__modal-container--mounted` : '' }`} />
      <div className={`topbar__modal ${isMounted ? `topbar__modal--mounted` : '' }`} ref={ref}>
        <div className='topbar__modal-list'>
          {sectionsList.map((section,index) => {
            return (!section.shouldHide) && (
              <>
                <div 
                  key={`topbar__modal-item-${index}`} 
                  className="topbar__modal-list-item"
                  onClick={() => {
                    handleClick(section.key)
                    handleCloseModal()}
                  } 
                > 
                  {t(`topbar.${section.key}`)} 
                </div>
              </>
            )
          })}
          <div className='topbar__modal-button-section'>
            <Button text="Portfolio"/>
          </div>
          <div className='topbar__modal-icons-section'>
            <AiOutlineYoutube /> 
            <AiOutlineGithub /> 
            <AiOutlineInstagram /> 
            <AiOutlineLinkedin /> 
          </div>
        </div>
      </div>
    </>
  )
} 

TopBarModal.propTypes = {
  sectionsList: PropTypes.array, 
  handleClick: PropTypes.func, 
  handleCloseModal: PropTypes.func
}