import React, {useState} from 'react'
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {Nav, Navbar, Container} from "react-bootstrap";



const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [active, setActive] = useState(0);
  
    return (
        <div className='nav-container'>
            <Navbar collapseOnSelect expand='sm' bg='transparent'>
                <Container fluid>
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-toggle='collapse' data-bs-target='#navbarScroll'>
                    <button 
                        className='menu-bars'
                        onClick={() => setIsNavExpanded(!isNavExpanded)}>
                            <FaIcons.FaBars/>
                    </button>
                </Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className='mx-auto'>
                            <Nav.Link eventKey="1">
                                <Link to='/'>
                            <FaIcons.FaHome/> Home</Link>
                            </Nav.Link>
                            <Nav.Link eventKey="2">
                                <Link to='/about' ><FaIcons.FaUser/> About</Link>
                            </Nav.Link>

                            <Nav.Link eventKey="3">
                                <Link to='/projects' ><FaIcons.FaBook/> Projects</Link>
                            </Nav.Link>
                            <Nav.Link eventKey="4">
                                <Link to='/contact' ><FaIcons.FaMailBulk/> Contact Me</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>

        </div>
  )
}

export default NavBar