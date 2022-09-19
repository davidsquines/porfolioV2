import React from 'react'
import {Col, Row, Container, Card, ListGroup} from 'react-bootstrap';
import profilePic from "../assets/images/profilePic.jpg"
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";
import resume from "../assets/docs/DavidQuinesResume9-6.pdf"

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Container fluid>
        <Row>
          <Col sm={3}><LeftColumn/></Col>
          <Col sm={9}><RightColumn/></Col>
        </Row>
      </Container>
      
    </div>
  )
}

const LeftColumn = () => {
  return(
    // <Card  style={{width: "100%", background: "none", marginTop: " 10px", color: "white"}} className='left-card'>
    //   <Card.Img variant='top' src={profilePic}  style={{borderRadius: "150px"}} className = "profile-pic">
    //   </Card.Img>
    //   <Card.Body >
    //     <Card.Title style={{fontSize: "25px"}}>David Quines</Card.Title>
    //     <Card.Text style={{opacity: ".5",}}>Fullstack Engineer</Card.Text>
    //     <Card.Text sytle={{ lineHeight: "8px"}}>Porfolio Website</Card.Text>
    //     <Card.Text style={{borderBottom: "solid 2px rgba(217,217,217, .2)"}}><a href="mailto:davidasquines@gmail.com" ><FaIcons.FaEnvelope/> davidasquines@gmail</a></Card.Text>
    //     <Card.Text>Social Media
        // <ul>
        //   <li><a className="icon" href="https://github.com/davidsquines" target="_blank" style={{color: '#F78166'}}><FaIcons.FaGithub/></a></li>
        //   <li><a className='icon' href="https://www.linkedin.com/in/david-quines7/" target="_blank" style={{color: '#F78166'}}><FaIcons.FaLinkedin/></a></li>
        //   <li><a className='icon' href="https://www.instagram.com/dsqsfl/" target="_blank" style={{color: '#F78166'}}><FaIcons.FaInstagram/></a></li>
        // </ul>
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    <div className='left-card'>
      <div className='row-content'>
          <img className='profile-pic' src={profilePic}/>
        <div style={{justifyContent: "start", marginTop:"10px"}}>
          <h2>David Quines</h2>
          <h5 style={{opacity: ".5"}}>Fullstack Developer</h5>
        </div>
      </div>
      <div className='left-card-content'>
        <div style={{borderBottom: "solid 2px rgba(217,217,217, .2)", paddingBottom:"20px"}}>
          <h3>Porfolio Website</h3>
          <a href="mailto:davidasquines@gmail.com" ><FaIcons.FaEnvelope/> davidasquines@gmail</a>
        </div>
        <div className='social-media-container'>
          <h6>Social Media</h6>
          <ul>
            <li><a className="icon" href="https://github.com/davidsquines" target="_blank" style={{color: '#F78166'}}><FaIcons.FaGithub/></a></li>
            <li><a className='icon' href="https://www.linkedin.com/in/david-quines7/" target="_blank" style={{color: '#F78166'}}><FaIcons.FaLinkedin/></a></li>
            <li><a className='icon' href="https://www.instagram.com/dsqsfl/" target="_blank" style={{color: '#F78166'}}><FaIcons.FaInstagram/></a></li>
          </ul>
        </div>
      </div>
      
      
    </div>
   
  )

}
const RightColumn = () => {
  return(
    <Container fluid className='right-column'>
      <Row>
        <Col sm={6}>
          <div className="file-card">
            <Link to="/about"> <FaIcons.FaUser style={{color: "white"}}/> 
               About <br/> 
              
         
            </Link>
            <p> Learn More about me</p>
            
          </div>
        </Col>
        <Col sm={6}>
          <div className="file-card">
            <Link to='/projects' ><FaIcons.FaBook style={{color: "white"}}/>
              Projects <br/>
              
            </Link>
            <p> Check out some of the projects I have made</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="file-card">
            <Link to='/contact' ><FaIcons.FaMailBulk style={{color: "white"}}/> Contact Me
            
            </Link>
            <br/><p> Let's build something</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="file-card">
            <Link to={resume} target="_blank"><FaIcons.FaFile style={{color: "white"}}/>Resume
            
            </Link>
            <br/><p>Here is who I am and what I can do</p>
          </div>
        </Col>
      

      </Row>
    </Container>
  )
}

export default Home