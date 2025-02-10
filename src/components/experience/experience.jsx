import { useTranslation } from 'react-i18next';

import { Trans } from 'react-i18next';

import { Chip } from './../common/Chip';

import experiences from './../../data/experience.json'

export const Experience = () => {
  const { t } = useTranslation()

  return (
    <div className='experience'>
      <div className='experience-title'> {t('experience.title')}  </div>
      <div className='experience-list'>
        {experiences.data.map((experience, index) => {
          return (
            <div key={`experience-${index}`}className='experience-list-item'>
              <div> {experience.job} | {experience.company}</div>
              <div> {experience.from} - {experience.to} </div>
              <div> 
                <Trans 
                  i18nKey={experience.description}
                  components={[<strong key='first' />]}
                />
              </div>
              <div className='experience-tools-list'>
                {experience.tags.map(tag => <Chip key={`experience-${index}-tag-${tag}`}label={tag} /> )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}