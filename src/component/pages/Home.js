import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Ananya Sista</h2>
        <div className="prompt">
          <p>
            A Computer Science Student with a passion for tech.
          </p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/ananya-sista')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/ananyasista?tab=repositories')}/>
          <EmailIcon onClick={() => window.location = 'mailto:sistaa@ufl.edu'}/>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Python, C#, HTML/CSS, C, Matlab</span>
          </li>
          {<li className="item">
            <h2>Softwares & Technologies</h2>
            <span>Docker, Windows, Linux, Git, Confluence, Jira, Bitbucket, Agile Scrum</span>
          </li> }
          <li className="item">
            <h2>Coursework</h2>
            <span>Advanced Programming Fundamentals, Data Strcutures and Algorithms, Introduction to Computer Organization, Calculus 3, Differential Equations, Computational Linear Algebra, 
              Applications of Discrete Structures</span>
          </li>
        </ol>
      </div>

    </div>

  )
}

export default Home