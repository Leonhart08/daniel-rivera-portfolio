import  { useState, useEffect } from "react";

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { FaBluesky } from "react-icons/fa6";

export const SocialMediaLinks = () => {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    setTimeout(() => setVisible(true), "300")
  },[])

  return (
    <div className={`social_media_links ${visible ? 'social_media_links__fade-in--active' : 'social_media_links__fade-in'}`}>
      <div className="social_media_links__icon">
        <a href="https://github.com/Leonhart08" target="_blank" rel="noreferrer"> 
          <AiOutlineGithub /> 
        </a>
      </div>
      <div className="social_media_links__icon"> 
        <a href="https://bsky.app/profile/danielredux.bsky.social" target="_blank" rel="noreferrer">
          <FaBluesky />
        </a>
      </div>
      <div className="social_media_links__icon">
        <a href="https://www.linkedin.com/in/daniel-rivera-b3041a48/" target="_blank" rel="noreferrer"> 
          <AiOutlineLinkedin /> 
        </a>
      </div>
      <div className="social_media_links__line" />
    </div>
  )
}