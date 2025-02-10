import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LangSettings = () => {
  const { i18n } = useTranslation();

  const locales = Object.keys(i18n.services.resourceStore.data); 

  const [visible, setVisible] = useState(false)

  const handleOnClick = (lang) => i18n.changeLanguage(lang)

  useEffect(() => {
    setTimeout(() => setVisible(true), "300")
  },[])

  return (
    <div className={`language-settings ${visible ? 'language-settings__fade-in--active' : 'language-settings__fade-in'}`}>
      <div className='language-settings__item--selected'> {i18n.language} </div>
      <div className='language-settings__list'>
        {locales.map((lang, index) => {
          if(lang === i18n.language) return 

          return (
            <div key={index} onClick={() => handleOnClick(lang)} className='language-settings__item'> 
              {lang} 
            </div>
        )}
      )}
      </div>
    </div>
  )
}