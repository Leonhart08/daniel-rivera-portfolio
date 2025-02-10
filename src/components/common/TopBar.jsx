import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { AiOutlineMenu } from 'react-icons/ai'

import { Button } from './Button'
import { TopBarModal } from './TopBarModal'

import { FaCode } from 'react-icons/fa'

export const TopBar = ({ sectionsList, handleClick }) => {
  const { t } = useTranslation();
  console.log('sectionsList', sectionsList)
  const [visible, setVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollingBack, setScrollingBack] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  
  const [windowWidth, setWindowWidth] = useState(false)
  
  useEffect(() => setWindowWidth(window.innerWidth), [])
  
  useEffect(() => {
    setTimeout(() => setVisible(true), "300")
  },[])

  const handleNavigation = (e) => {
    const window = e.currentTarget
    const currentPosition = window.scrollY;

    setScrollingBack(currentPosition < scrollPosition)
    setScrollPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e))

    return () => window.removeEventListener("scroll", handleNavigation);
  })
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <>
      <div className={`
        topbar ${visible ? 'topbar__fade-in--active' : 'topbar__fade-in'} 
        ${scrollPosition > 0 ? 'topbar__scrolling' : ''}
        ${scrollPosition > 0 && scrollingBack ? 'topbar__scrolling-back' : ''}
      `
        } 
      >
        <div className='topbar__icon' onClick={() => handleClick('presentation')} > 
          <FaCode  />
        </div>
        {windowWidth > 768 && (
          <div className='topbar__list'>
            {sectionsList.map((section,index) => {
              return (!section.shouldHide) && (
                <>
                  <div key={`topbar-item-${index}`} onClick={() => handleClick(section.key)} className="topbar__list-item"> 
                    {t(`topbar.${section.key}`)} 
                  </div>
                  {index !== (sectionsList.length - 1) && <div className="topbar__list-item-separator"> | </div>}
                </>
              )
            })}
            <div className='topbar__portfolio-link'>
              <Button text="Portfolio"/>
            </div>
          </div>
        )}
        {windowWidth < 768 && (
          <div onClick={() => setOpenModal(true)} className='topbar__menu-icon'> 
            <AiOutlineMenu  /> 
          </div>
        )}
      </div>

      {openModal && (windowWidth < 1024) && (
        <TopBarModal 
          sectionsList={sectionsList} 
          handleClick={handleClick}
          handleCloseModal={()=> setOpenModal(false)}
        />
      )}
    </>
  )
}

TopBar.propTypes = {
  sectionsList: PropTypes.string,
  handleClick: PropTypes.func 
};
