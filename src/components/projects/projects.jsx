import { useTranslation } from 'react-i18next';

import { FadeInOnScroll } from './../../components/observers/fadeInOnScroll'

import projectsList from './../../data/projects.json'

export const Projects = () => {
  const { t } = useTranslation()

  return (
    <FadeInOnScroll>
      <div className="section-container">
        <div className='projects'>
          <div className='projects__title'>
            <h2> {t('projects.title')} </h2>
          </div>
          <div className='projects__list'> 
            {projectsList.data.map((item,index) => {
              return (
                <div key={index} className='projects__list-item'>
                    <img src={item.image}  className='project__list-item-image' /> 
                    <div className='projects__list-item-content'>
                      <h4> { item.name } </h4>
                      <span> { item.description } </span>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  )
}

