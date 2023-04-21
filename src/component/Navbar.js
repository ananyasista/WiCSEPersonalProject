import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navbar = () => {
  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/WiCSEPersonalProject/">Home</Link>
            <Link to="/WiCSEPersonalProject/projects">Projects</Link>
            <Link to="/WiCSEPersonalProject/experience">Experience</Link>
        </div>
    </div>
  )
}

export default navbar