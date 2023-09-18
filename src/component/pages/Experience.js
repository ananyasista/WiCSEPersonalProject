import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ClubIcon from '@mui/icons-material/Groups2';
import ResearchIcon from '@mui/icons-material/Biotech';
import MoreIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './Experience.css';
import LessIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Fade from '@mui/material/Fade';

const Collapse = ({hover, collapsed, children}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const [isHover, setIsHover] = React.useState(hover=false);
  return (
  <>
  <div className="collapseText"> 
    <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)}
      onMouseOver={() => setIsHover(hover=true)} onMouseLeave={() => setIsHover(hover=false)}>
    {isCollapsed ? "Less" : "More"}
    </button>
    {isHover && !isCollapsed ? (<Fade in="true"><MoreIcon fontSize="medium" color="#5C7457"/></Fade>) : ""}
    {isHover && isCollapsed ? (<Fade in="true"><LessIcon fontSize="medium" color="#5C7457"/></Fade>) : ""}
  </div>
  <div className={`collapse-content ${isCollapsed ? "expanded" : "collapsed"}`}>
    {children}
  </div>
  
    
  </>
  );
};


const Experiences = () => {
  return (
    <div >
      <VerticalTimeline lineColor = "#5C7457">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date = "August 2022 - Expected Graduation May 2026"
          iconStyle={{background: "#88A281", color: "#fff"}}
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
          iconStyle={{background: "#88A281", color: "#fff"}}
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
            Skills: Docker, Python, Linux, software best practices, documentation authoring, Jira, Confluence, Bitbucket <br />
            <Collapse>
            <ul>
              <li>
                <p>Collaborate with 3rd party contractors and internal parties to verify functionality of Dockerized machine learning detection algorithm,
                and adapt the Docker image to use a new base image while at the same time decreasing build time by over 50%</p>
              </li>
              <li>
                <p>Review existing code modules and documentation, apply Software best practices to increase the quality of the algorithms, and author
                additions to the documentation to improve user experiences in the future</p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--club"
          date = "May 2023 - Present"
          iconStyle={{background: "#88A281", color: "#fff"}}
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
          Skills: event planning, budget management, industry networking, public speaking <br />
          <Collapse>
            <ul>
              <li>
                <p>Create educational materials to guide members and students through the event, including a checklist of items to bring, elevator speech tips, and campus resources to help with preparation</p>
              </li>
              <li>
                <p>Foster connections between the organization and industry contacts through research into various companies and constant email communication to maintain the relationships</p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--club"
          date = "May 2023 - Present"
          iconStyle={{background: "#88A281", color: "#fff"}}
          icon = {<ClubIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Secretary - WiCSE @ UF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida, Gainesville, FL
          </h4>
          <p>
            Collect, maintain, and organize the Women in Computer Science and Engineering's (WiCSE) club information, as well as collaborating with other execuitve board members to ensure club operations run smoothly. 
          <br /> <br />
          Skills: event planning, budget management, industry networking, public speaking <br />
          <Collapse>
            <ul>
              <li>
                <p>Organize and maintain organization information, such as member attendance, speaker permit filing, and room reservations</p>
              </li>
              <li>
                <p>Create weekly newsletter to send out to all members and interested parties that contains current events and upcoming opportunities such as workshops and speaker series</p>
              </li>
              <li>
                <p>Act as a mentor in the internal mentorship program and provide advice and support to underclassmen to help educate on technical knowledge and general college activities</p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "April 2023 - Present"
          iconStyle={{background: "#88A281", color: "#fff"}}
          icon = {<WorkIcon/>}
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
          Skills: event planning, budget management, conflict resolution, communication, interpersonal skills <br />
          <Collapse>
            <ul>
              <li>
                <p>Assist residents in the transition from high school to college and throughout their collegiate experience</p>
              </li>
              <li>
                <p>Aid in overcoming resident’s academic and personal concerns and problems by creating an environment inducive to diversity, inclusion, and self-growth</p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--research"
          date = "January 2023 - Present"
          iconStyle={{background: "#88A281", color: "#fff"}}
          icon = {<ResearchIcon/>}
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
          Skills: C#, Git, Unity, data collection, versional control, external libraries <br />
          <Collapse>
            <ul>
              <li>
                <p>Design the solution architecture for training exercises through performing exercises firsthand and utilizing collected data to implement reasonable scoring mechanisms</p>
              </li>
              <li>
                <p>Improve previous application version functionality and user experience through creation of additional UI elements, such as exercise display toggles</p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--club"
          date = "September 2022 - Present"
          iconStyle={{background: "#88A281", color: "#fff"}}
          icon = {<ClubIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Liaison - CUR @ UF
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida, Gainesville, FL
          </h4>
          <p>
          Through the Center for Undergraduate Research (CUR), coordinate with the College of Liberal Arts and Sciences (CLAS) to plan and host events that serve to promote various research opportunities that occur within the college for students of all majors.
          <br /> <br />
          Skills: social media marketing, communication, organization, documentation, event planning <br />
          <Collapse>
            <ul>
              <li>
                <p>Communicate frequently with the CLAS director of undergraduate research and keep up-to-date records of all meetings and correspondence</p>
              </li>
              <li>
                <p>Collaborate with other CUR student ambassadors to brainstorm ideas and combine different persepctives to create events that benfit the target audience </p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "June 2022 - July 2022"
          iconStyle={{background: "#88A281", color: "#fff"}}
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
          Skills: conflict resolution, working with kids, lesson planning, communication <br />
          <Collapse>
            <ul>
              <li>
                <p>Tailored explanations to each individual student to ensure their understanding of the content</p>
              </li>
              <li>
                <p>Assisted in student-to-student and student-to-instructor conflict resolution by speaking with involved parties to come up with a solution that allowed the lesson to continue smoothly</p>
              </li>
            </ul>
          </Collapse>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences
