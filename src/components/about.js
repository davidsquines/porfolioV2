import React from 'react'
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
const About = () => {
  return (
    <>
      <div className='content-wrapper'>
        <div className="return-links" style={{textAlign:"start"}}>
          <Link to="/">davidsquines</Link> / about
        </div>
        <div className='container'>
          <div className='container-header'>
            <span className='appear'>davidsquines</span>
            <span className='disappear'>davidsquines updated README.md</span>
            <span className='disappear'><FaIcons.FaCheck style={{color: "green", backgroundColor: "#161B22"}}/> e03fe2g 5 days ago</span>
            <span className='disappear'><FaIcons.FaArrowAltCircleRight/> 10 commits</span>
          </div>
          <div className='container-content' style={{borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px"}}>
            <div className='projects-row'>
              <span ><FaIcons.FaFile />README.md</span>
              <span className='disappear' style= {{marginLeft:"50px",opacity:".5"}}>Learn more about me</span>
              <span className='disappear' style= {{marginLeft:"70px",opacity:".5"}}>September 2022</span>

            </div>
            
          </div>
        </div>
        <div className="container">
          <div className='readme-content' style={{borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px", textAlign: "start", backgroundColor:"#0D1116"}}>
          <p style={{backgroundColor:"#0D1116"}}>README.md</p>
          <div className='readme-content-container'>
            <section>
              <h2>Get to Know Me</h2>    
            </section>
            <section>
            Software engineer with a focus in Full-Stack development based in Burbank, California. I am passionate about creating applications that are fun and user friendly. I have worked on multiple web and mobile applications.
            <br/>
            <br/>
            Self-driven and goal-oriented person, an ambitious worker with high attention to detail. Fan of anime, powerlifting, and philosphical literature.
            <br/>
            <br/>
            Interested in backend, frontend, and or devops development and working with positive and open minded people. 
            </section>
            <section>
              <h4>My Skills</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Amazon Web Services</li>
                <li>CSS</li>
                <li>RESTful API Development</li>
                <li>Cloud Development</li>
              </ul>
            </section>
            <section>
              <h4>Education</h4>
              <ul>
                <li>California State University - Northridge - 2021 - Honors: Cum Laude (GPA 3.53)</li>
              </ul>
            </section>
            <section>
              <h4>Awards</h4>
              <ul>
                <li><a href="https://devpost.com/software/chorosx" target="_blank" >MataHacks 2021 First Place Winner | ChorosX</a></li>
                <li><a href="https://www.csun.edu/sites/default/files/SDPS_Brochure_7May21_with_video_links.pdf" target="_blank">CSUN 2021 Senior Design Project Showcase First Place Winner for Computer Science | EureQa </a></li>
              </ul>
            </section>
          </div>
          </div>
        </div>
      </div>
       

    </>
  )
}

export default About