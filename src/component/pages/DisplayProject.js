import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../../data/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import './DisplayProject.css'

function displayIcon({url}){
    if(url != " "){
        return <GitHubIcon className= "icons" onClick={() => window.open({url})}/>
    }
}

const DisplayProject = () => {
        const {id} = useParams()
        const project = ProjectList[id]
        // const url = ({project.github})
    return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p class='skills'>
            <b>Skills:</b> {project.skills}
        </p>
        <p class='overview'>
            <b>Overview:</b> <br />{project.details} <br />
        </p>
        <p class='details'>
            <ul>
                <li>{project.bullet1}</li>
                <li>{project.bullet2}</li>
            </ul>
        </p>
            {/* {displayIcon({project.github})} */}
        
        
    </div>
  )
}

export default DisplayProject
