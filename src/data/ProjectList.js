import proj1 from '../images/proj1.png'
import proj2 from '../images/proj2.gif'
import proj3 from '../images/proj3.gif'
import proj4 from '../images/proj4.png'

export const ProjectList = [
    {
        name: "SWE x CACI Satellite Scheduler",
        image: proj1,
        skills: "C++, Data Structures, external data, 3rd party libraries",
        details: "In collaboration with the University of Florida Society of \
        Women Engineers (SWE) and CACI, I aided in implementing a \
        C++ satellite scheduler algorithm that reads in TLE data and \
        calculates a 7-day schedule of eligible satellites for a pre-determined \
        ground station to detect.",
        bullet1: "Utilized max head inputs, sorting algorithms, and object-oriented\
         design to build a function that evaluated 70+ satellites per day and added them \
         to a schedule based off start/endtime while avoiding overlaps",
        bullet2: "Collaborated with 10 engineers to design project specifications, program \
        architecture, and a list of needed external contributons.",
        github: "https://github.com/ananyasista/teamTech22-23_SatelliteScheduler",
    },
    {
        name: "Minesweeper",
        image: proj2,
        skills: "C++, SFML, object-oriented programming, recursion, file input",
        details: "I developed a fully functional version of the classic game\
        Minesweeper in C++ with the use of the SFML library to output graphics\
        and receive input from the player to determine game states",
        bullet1: "Structured code base through the usage of object-oriented\
        programming to represent game objects and behaviors, recursive methods,\
        and front-end user input to adjust the visibility of graphical elements\
        such as mines, flags, and a flag counter.",
        bullet2: "Parsed data from text files to implement pre-determined game board\
        layouts, with the default being 50 randomly placed mines.",
        github: ""
    },
    {
        name: "Ultrasound Virtual Coach",
        image: proj3,
        skills: "Unity, C#, data collection, external libraries",
        details: "As a research assistant at the UF Center for Simulation, \
        Safety, and Advanced Learning Technologies (CSSALT) lab, I implemented\
        an Ultrasound Virtual Coach simulation program for medical professionals\
        to use while training to perform ultrasounds on patients.",
        bullet1: "Designed the solution architecture for 20+ training exercises\
        through collecting practical performance data and creating reasonable scoring\
        mechanisms in multiple choice and tactical question formats.",
        bullet2: "Improved the user interface of older program versions by adding UI\
        elements such as viewer toggles, and chimes for correct/incorrect solutions.",
        github: ""
    },
    {
        name: "Personal Website",
        image: proj4,
        skills: "Javascript, React, HTML, CSS, Git",
        details: "A website I developed in my free time to further showcase my projects \
        and experience outside of my resume, teach myself React, and \
        stay in touch with my HTML/CSS skills.",
        bullet1: "Developed using React framework elements in tandem with JavaScript functions and HTML/CSS structures and stylesheets." ,
        bullet2: "Dynamic structuring of project pages using react-router that allows streamlined and consistent creation of each project page. ",
        github: ""
    }
]