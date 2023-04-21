import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navbar = () => {
  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="ananyasista.github.io/">Home</Link>
            <Link to="ananyasista.github.io/projects">Projects</Link>
            <Link to="ananyasista.github.io/experience">Experience</Link>
        </div>
    </div>
  )
}

export default navbar