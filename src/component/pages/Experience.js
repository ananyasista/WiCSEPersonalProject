import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ClubIcon from '@mui/icons-material/Groups2'
import './Experience.css'

const Experiences = () => {
  return (
    <div >
      <VerticalTimeline lineColor = "#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date = "August 2022 - Expected Graduation May 2026"
          iconStyle={{background: "#8198FD", color: "#fff"}}
          icon = {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            University of Florida, Gainesville, Florida
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Computer Science, Economics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "May 2023 - July 2023"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Software Engineering Intern - L3Harris
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Melbourne, FL
          </h4>
          <p>
            Integrate machine learning metric algorithms into an existing company framework to support existing and future machine learning
            detection systems in their accuracy and completeness. <br /> <br />
            Skills: Docker, Python, Linux, software best practices, documentation authoring, Jira, Confluence, Bitbucket
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "June 2022 - July 2022"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Mathematics Instructor - Mathnasium
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tampa, FL
          </h4>
          <p>
          Instructed up to 8 K-12 students at a time in a variety of math topics ranging from addition to Calculus. <br /> <br />
          Skills: conflict resolution, working with kids, lesson planning, communication
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "January 2023 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Research Assistant - CSSALT @ UF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida, Gainesville, FL
          </h4>
          <p>
          Implement the Center for Simulation, Safety, and Advanced Learning Technologies’ (CSSALT) Ultrasound Virtual Coach simulation program for medical professionals to use while training to perform ultrasounds on patients.
          <br /> <br />
          Skills: C#, Git, Unity, data collection, versional control, external libraries

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--club"
          date = "January 2023 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<ClubIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Chair - SWE @ UF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida, Gainesville, FL
          </h4>
          <p>
          Organize the Society of Women Engineer's bi-annual <i>Evening with Industry Event</i> which allows students to network with current industry professionals, facilitating
          professional growth and future career opportunities.
          <br /> <br />
          Skills: event planning, budget management, industry networking, public speaking

          </p>
        </VerticalTimelineElement>
         <VerticalTimelineElement 
          className="vertical-timeline-element--club"
          date = "April 2023 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<ClubIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Resident Assistant - UF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida, Gainesville, FL
          </h4>
          <p>
          Enhance and maintain a sense of shared community in the designated residential area by facilitating intentional interactions, social
          activities, and other opportunities for residents to interact with each other and grow.
          <br /> <br />
          Skills: event planning, budget management, conflict resolution, communication, interpersonal skills
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences
