import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { FaBluesky } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='footer'>
      <div> Made by <strong> Daniel Rivera </strong>, 2025 </div>
      <div className='footer__icons-section'> 
        <div className="footer__icons-section__icon">
          <a href="https://github.com/Leonhart08" target="_blank" rel="noreferrer"> 
            <AiOutlineGithub /> 
          </a>
        </div>
        <div className="footer__icons-section__icon"> 
          <a href="https://bsky.app/profile/danielredux.bsky.social" target="_blank" rel="noreferrer">
            <FaBluesky />
          </a>
        </div>
        <div className="footer__icons-section__icon">
          <a href="https://www.linkedin.com/in/daniel-rivera-b3041a48/" target="_blank" rel="noreferrer"> 
            <AiOutlineLinkedin /> 
          </a>
        </div>
      </div>
    </div>
  )
} 
