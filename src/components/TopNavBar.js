import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import ctIcon from '../assets/yellow.png'
import resumePDF from '../assets/resumeA4.pdf'
import menu from '../assets/icon/menu2.png'

function TopNavBar(){
    return(
        <Navbar className='Top-NavBar' fixed="top" expand='sm'>

            <Navbar.Brand href="#home"><Image src={ctIcon} style={{height:50, width:50, marginLeft:10}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <Image src={menu}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link className='navBar-Link' style={{color: '#ffe279', paddingLeft: 45,paddingRight: 5}} href="#about">ABOUT</Nav.Link>
                    <Nav.Link className='navBar-Link' style={{color: '#ffe279', paddingLeft: 45,paddingRight: 5}} href="#portfolio">PORTFOLIO</Nav.Link>
                    <Nav.Link className='navBar-Link' style={{color: '#ffe279', paddingLeft: 45,paddingRight: 5}} href="#contact">CONTACT</Nav.Link>
                    <Nav.Link className='navBar-Link' style={{color: '#ffe279', paddingLeft: 45,paddingRight: 5}} href={resumePDF} target="_blank">RESUME</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNavBar;

