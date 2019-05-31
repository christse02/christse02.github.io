import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import me from '../assets/img/mePic.jpg'

import phone from '../assets/icon/phone.png'
import email from '../assets/icon/email.png'
import linkedin from '../assets/icon/linkedin.png'
import resume from '../assets/icon/resume.png'
import resumePDF from '../assets/resumeA4.pdf'

import facebook from '../assets/icon/facebook.png'
import instagram from '../assets/icon/instagram.png'

function Contact(){
    return(
        <Container fluid className="Contact" id="contact" style={{backgroundColor:'#fdf9ec'}}>
            <Row>
                <Col sm={12} md={{ span: 8, offset: 2}}>
                    <div className ='Heading'>
                    <br/><br/><br/>
                        <h1><font color="#cca000"><b>Contact</b></font></h1>
                        <hr/>
                    </div>
                </Col>
            </Row>
            <Row className='Content'>
                <Col md={{ span: 3, offset: 2}}>
                    <Image src={me} style={{height:'256px', width:'256px'}}/>
                </Col>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Col md={{ span: 5, offset: 1}} lg={{ span: 5, offset: 0}}>
                    <br/><br/>
                    <Image className="Icon" src={resume} /> &nbsp; <a href={resumePDF} target="_blank">My Resume</a> <br/><br/>
                    <Image className="Icon" src={email} /> &nbsp;  christse02@gmail.com<br/><br/>
                    <Image className="Icon" src={phone} />  &nbsp; +1 (416) 837-0578<br/><br/>
                    <a href="https://www.linkedin.com/in/christse02/" target="_blank"><Image className="Icon" src={linkedin} /></a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/christse02/" target="_blank"><Image className="Icon" src={facebook} /></a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/christse02/" target="_blank"><Image className="Icon" src={instagram} /></a>
                </Col>
            </Row>
            <br/><br/><br/><br/>
        </Container>
    );
}

export default Contact;