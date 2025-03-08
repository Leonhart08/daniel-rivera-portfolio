import { useState, useEffect, useRef } from 'react'

import { Presentation } from './components/presentation/Presentation'
import { AboutMe } from './components/about-me/AboutMe'
import { DeveloperPortfolio } from './components/DeveloperPortfolio'
  
import { Projects } from './components/projects/projects'

import { SocialMediaLinks } from './components/common/SocialMediaLinks'
import { LangSettings } from './components/common/LangSettings'
import { TopBar } from './components/common/TopBar'
import { Footer } from './components/common/Footer'

import './styles/styles.scss'

const App = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = (sectionSelected) => {
    return SECTIONS.find(section => section.key === sectionSelected).ref.current
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }

  useEffect(() => {
    setTimeout(() => setVisible(true), "1000")
  },[])

  const SECTIONS = [
    { 
      key: 'presentation',
      Component:  Presentation,
      ref: useRef(),
      shouldHide: true
    },
    { 
      key: 'about-me',
      Component:  AboutMe,
      ref: useRef()
    },
    { 
      key: 'as-a-developer',
      Component:  DeveloperPortfolio,
      ref: useRef()
    },
    {
      key: 'projects',
      Component:  Projects,
      ref: useRef()
    }
  ]

  return (
    <>
      <div className={`fade-in ${visible ? 'active' : false}`}>
        <SocialMediaLinks />
        <LangSettings />
        <TopBar sectionsList={SECTIONS} handleClick={handleScroll} />
        <>
          {SECTIONS.map(section => {
            const { key, Component, ref } = section
            return (
              <div key={`section-${key}`} ref={ref}>
                <Component handleScroll={handleScroll} />
              </div>
            )
          })}
        </>
        <Footer />
      </div>
    </>
  )
}

export default App
