import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"

const Footer = () => {
  return (
    <div className = "footer">
      <div className="socialMedia">
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/ananya-sista')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/ananyasista?tab=repositories')}/>
          <EmailIcon onClick={() => window.location = 'mailto:sistaa@ufl.edu'}/>
       </div>
    </div>
  )
}

export default Footer