import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navbar = () => {
  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default navbar