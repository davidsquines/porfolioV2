import React, {useState, setState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import { projectsData } from './projectsData';

const Projects = () => {
  const [tabIndex, setTabIndex] = useState(-1);
  return (
    <div className='content-wrapper'>
      <div className="return-links" style={{textAlign:"start"}}>
          <Link to="/">davidsquines</Link> / projects
      </div>

      <div className='container'>
          <div className='container-header'>
            <span className='appear'>Projects</span>
            <span className='disappear'>davidsquines updated Eleos.md</span>
            <span className='disappear'><FaIcons.FaCheck style={{color: "green", backgroundColor: "#161B22"}}/> io9d21s 10 days ago</span>
            <span className='disappear'><FaIcons.FaArrowAltCircleRight/> 5 commits</span>
          </div>
          <div className='container-content' onClick={() => setTabIndex(0)}>
            <div className='projects-row'>
              <span ><FaIcons.FaFile />GotGains.md</span>
              <span className='disappear' style= {{marginLeft:"50px"}}>A fitness application</span>
              <span className='disappear' style= {{marginLeft:"100px"}}>May 2020</span>
            </div>
          </div>
          <div className='container-content' onClick={() => setTabIndex(1)} >
            <div className='projects-row'>
              <span><FaIcons.FaFile /> ChorosX.md</span>
              <span  className='disappear' style= {{marginLeft:"50px"}}>Track Satellite Positioning</span>
              <span className='disappear' style= {{marginLeft:"100px"}}>April 2021</span>
            </div>
          </div>
          <div className='container-content'onClick={() => setTabIndex(2)}>
          <div className='projects-row'>
              <span><FaIcons.FaFile /> EureQa.md</span>
              <span className='disappear' style= {{marginLeft:"50px"}}>A Questionaire App</span>
              <span className='disappear' style= {{marginLeft:"100px"}}>May 2021</span>
            </div>
          </div>
          <div className='container-content'onClick={() => setTabIndex(3)}>
            <div className='projects-row'>
              <span><FaIcons.FaFile />DictionaryAttack.md</span>
              <span className='disappear' style= {{marginLeft:"50px"}}>A game web application</span>
              <span className='disappear' style= {{marginLeft:"100px"}}>December 2021</span>
            </div>
          </div>
          <div className='container-content' onClick={() => setTabIndex(4)} style={{borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px"}}>
          <div className='projects-row'>
              <span><FaIcons.FaFile /> Eleos.md</span>
              <span className='disappear' style= {{marginLeft:"50px"}}>Desktop Virtual Assistant</span>
              <span className='disappear' style= {{marginLeft:"100px"}}>August 2021</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='readme-content' style={{borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px", textAlign: "start", backgroundColor:"#0D1116"}}>

              <CurrentProjects index={tabIndex}/>
          </div>
        </div>
    </div>
  )
}

const CurrentProjects = ({index}) => {

  return(
    <>
      {index === -1 ? (
            <>
              <p style={{backgroundColor:"#0D1116"}}>README.md</p>
              <div className='readme-content-container'>
                <section>
                  <h2>Projects</h2>
                </section>
                <section style={{borderBottom: "none"}}>
                  These are some of the projects I have created. Click on one of the files to check out the full description of the project.
                </section>


              </div>
            
            </>

          ) : 
          (
            <>
              {projectsData
                .filter(x => x.id === index)
                .map(data => (
                  <>
                    <p style={{backgroundColor:"#0D1116"}}>{data.projectName}.md</p>
                    <div className='readme-content-container'>
                      <section>
                        <h2>{data.projectName}</h2>
                        <h6>{data.projectDate}</h6>
                        {data.projectImg ? (
                          <img src={data.projectImg} className='project-image disappear'/>

                        ): (
                          <></>
                        )}    
                      </section>
                      
               
                      <section>
                        <h4>Description</h4>
                        <p>{data.projectDescription}</p>
                      </section>
                      <section>
                        <h4>Technologies</h4>
                        <ul>
                        {data.technologies.map(tech => (
                          <li>{tech}</li>
                        ))}
                        </ul>
                      </section>
                      <section>
                        <h4>Source Code</h4>
                        <a href={data.projectUrl} target="_blank">{data.projectUrl}</a>
                      </section>
                    </div>
                  
                  </>
              ))  
              
            }
            </>
          )}
 
    </>
    

  )

  
}

export default Projects