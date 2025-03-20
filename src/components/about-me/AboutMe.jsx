import { useTranslation } from 'react-i18next';

import { Trans } from 'react-i18next';

import ReactCountryFlag from "react-country-flag"
import { FadeInOnScroll } from './../../components/observers/fadeInOnScroll'
import { BsMusicNote } from 'react-icons/bs'


export const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <FadeInOnScroll>
      <div className="section-container">
        <div className='about-me'>
          <div className='about-me__container'>
            <div className='about-me__profile'>
              <img
                src="profile.png"
                alt="Picture of the author"
                width={300}
                height={300}
                className={'about-me__profile-picture'} 
              />

            </div>
            <div className='about-me__content'>
              <h3> {t('about-me.title')}  </h3>
              <div className='about_me__content-divider' />
                <div>
                  <Trans 
                    i18nKey="about-me.content.0"
                    components={[<strong key='first' />, <ReactCountryFlag countryCode="CL" svg key='second'/>, <ReactCountryFlag countryCode="DK" svg key='third'/>]}
                  />
                </div>
                <div>
                  <Trans 
                    i18nKey="about-me.content.1"
                    components={[<strong key='first' />, <ReactCountryFlag countryCode="CL" svg key='second'/>, <ReactCountryFlag countryCode="DK" svg key='third'/>]}
                  />
                </div>
                <div>
                  <Trans 
                    i18nKey="about-me.content.2"
                    components={[<strong key='first' />, <ReactCountryFlag countryCode="CL" svg key='second'/>, <ReactCountryFlag countryCode="DK" svg key='third'/>]}
                  />
                </div>
                <div>
                  <Trans 
                    i18nKey="about-me.content.3"
                    components={[<strong key='first' />, <BsMusicNote key='second'/>]}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  )
}
