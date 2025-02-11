import { useTranslation } from 'react-i18next';
import { FaLaptopCode, FaReact, FaJsSquare, FaPython, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript} from 'react-icons/si';
import { SiCplusplus } from "react-icons/si";

import { FadeInOnScroll } from './../components/observers/fadeInOnScroll'
import { Box } from './common/Box'
import { Experience } from './experience/experience'

export const DeveloperPortfolio = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="section-container">
        <div className='portfolio portfolio-developer'>
          <Box>
            <div className='portfolio__wrapper'>
              <div className='portfolio__content'>
                <div className='portfolio__title'>
                  <h3> { t('as-a-developer.title.0') } </h3>
                  <div> <FaLaptopCode /> </div>
                  <h3> { t('as-a-developer.title.1') } </h3>
                </div>
                <div className='portfolio__text'>
                  <div> {t('as-a-developer.content.0')} </div>
                  <div> {t('as-a-developer.content.1')} </div>
                </div>
                <div className='portfolio__developer-list'>
                    <div className='portfolio__developer-list-item'>
                      <FaJsSquare /> 
                      <div> Javascript </div>
                    </div>
                    <div className='portfolio__developer-list-item'>
                      <SiTypescript />
                      <div> Typescript </div>
                    </div>
                    <div className='portfolio__developer-list-item'>
                      <FaPython />
                      <div> Python </div>
                    </div> 
                    <div className='portfolio__developer-list-item'>
                      <FaReact />
                      <div> ReactJs + Redux </div> 
                    </div> 
                    <div className='portfolio__developer-list-item'>
                      <SiCplusplus />
                      <div> C++ </div> 
                    </div> 
                    <div className='portfolio__developer-list-item'>
                      <FaNodeJs />
                      <div> NodeJs </div>
                    </div>
                    <div className='portfolio__developer-list-item'>
                      <FaDatabase />
                      <div> PostgreSQL, MySQL, MongoDB </div>
                    </div>    
                  </div>
              </div>
              <Experience />
            </div>
          </Box>
        </div>
      </div>
    </>
  )
}
