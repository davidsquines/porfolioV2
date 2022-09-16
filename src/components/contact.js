import React, {useRef} from 'react'
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();
    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      userID
    ).then((result) => {
      console.log(result.text);
      alert("Message sent!")
    }, (error) => {
      console.log("hit");
      console.log(error.text);
      alert("Error upon sending: " + error.text);
    });
    e.target.reset();
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="return-links" style={{textAlign:"start"}}>
            <Link to="/">davidsquines</Link> / contact
        </div>
        <div className='container'>
          <div className='container-header'>
            <span className='appear'>Contact Me</span>
            <span className='disappear'>davidsquines updated ContactMe.md</span>
            <span className='disappear'><FaIcons.FaCheck style={{color: "green", backgroundColor: "#161B22"}}/> fe04edy 1 day ago</span>
            <span className='disappear'><FaIcons.FaArrowAltCircleRight/> 12 commits</span>
          </div>
          <div className='container-content' >
            <div className='projects-row'>
              <span ><FaIcons.FaFile />README.md</span>
            </div>
          </div>
          <div className='container-content'>
            <div className='projects-row'>
              <span ><a href="https://github.com/davidsquines" target="_blank" className='social-media-row'><FaIcons.FaGithub/> Github</a></span>
            </div>
          </div>
          <div className='container-content'>
            <div className='projects-row'>
              <span ><a href="https://www.linkedin.com/in/david-quines7/" target="_blank" className='social-media-row'><FaIcons.FaLinkedin/> LinkedIn</a></span>
            </div>
          </div>
          <div className='container-content' style={{borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px"}}>
            <div className='projects-row'>
              <span ><a href="https://www.instagram.com/dsqsfl/" target="_blank" className='social-media-row'><FaIcons.FaInstagram/> Instagram</a></span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='readme-content'  style={{borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px", textAlign: "start", backgroundColor:"#0D1116"}}>
          
            <p style={{backgroundColor:"#0D1116"}}>README.md</p>
            <div className='readme-content-container'>
            <section>
              <h2>Let's connect</h2>
            </section>
            <section>
              <p>I am interested in Fullstack development. Feel free to use the form to contact me about oppurtunities or just to say hello. I will try to get back to you as soon as possible</p>
              <div className='contact-form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Enter Name'/>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='Enter email'/>
                    <label>Message</label>
                    <textarea name="message" placeholder='Enter message'/>
                    <button type="submit" className='submit-button' >Send Message</button>     

                </form>
              </div>
            </section>

            </div>
           
          </div>


        </div>
         
          
      </div>
    
    
    </>
  )
}

export default Contact