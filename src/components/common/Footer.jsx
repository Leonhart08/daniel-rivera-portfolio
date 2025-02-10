import { AiOutlineYoutube, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='footer'>
      <div> Made by <strong> Daniel Rivera </strong>, 2025 </div>
      <div className='footer__icons-section'> 
        <AiOutlineYoutube /> 
        <AiOutlineGithub /> 
        <AiOutlineInstagram /> 
        <AiOutlineLinkedin /> 
      </div>
    </div>
  )
} 
