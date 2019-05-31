import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Image from 'react-bootstrap/Image'
import Joystick from '../assets/icon/joystick.png'
import Cap from '../assets/icon/cap.png'
import Location from '../assets/icon/location.png'
import HK from '../assets/icon/hk.png'
import Home from '../assets/icon/home.png'


function About(){
    return(
        <Container fluid >
        <br/>
            <Row id='about'>
                <Col sm={12} md={{ span: 8, offset: 2}}>
                    <div className ='Heading'>
                        <br/><br/><br/>
                        <h1><b>About</b></h1>
                        <hr/>
                    </div>
                    <div className='Content' style={{fontSize:'20px'}}>
                        <span> Hey, I'm</span> <span id='Name'>Christine.</span>
                        <span> I'm a 23 year old HTML5 Game Developer and HKUST graduate, interested in gamification, human emotional intelligence, and how to combine these two to assist in providing an alternate approach to a person's mental, emotional, behavioural development.</span>
                    </div>
                    <br/><br/>
                </Col>
            </Row>
            <Row>
                <Col className= 'ContentColumn' sm={12} md={{span:10, offset:2}}>
                    <OverlayTrigger
                        key= '1'
                        placement= 'left'
                        overlay={
                            <Tooltip>
                                April 2019 
                            </Tooltip>
                        }
                    >
                        <div className = 'ContentRow' style={{backgroundColor: '#f3f1f7'}}>
                            <Image src={Location} style={{height:'32px', width:'32px'}}/>
                            &nbsp;&nbsp; Moved to Toronto, Canada <br/>
                        </div>
                    </OverlayTrigger>
                    
                    <OverlayTrigger
                        key= '2'
                        placement= 'left'
                        overlay={
                            <Tooltip>
                                Jul 2018 -  Dec 2018
                            </Tooltip>
                        }
                    >
                        <div className = 'ContentRow'>
                            <Image src={Joystick} style={{height:'32px', width:'32px'}}/>
                            &nbsp;&nbsp; <strong>Frontend HTML5 Game Developer</strong> at <b>TFS-Info Tech Comapny Limited</b>
                            <br/>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key= '3'
                        placement= 'left'
                        overlay={
                            <Tooltip>
                                May 2018
                            </Tooltip>
                        }
                    >
                        <div className = 'ContentRow' style={{backgroundColor: '#f3f1f7'}}>
                            <Image src={Cap} style={{height:'32px', width:'32px'}}/>
                            &nbsp;&nbsp; Graduated with <strong>B.Eng in Computer Science</strong> from <b>Hong Kong University of Science and Technology</b>
                            <br/>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key= '4'
                        placement= 'left'
                        overlay={
                            <Tooltip>
                                Sep 2014 - Dec 2018
                            </Tooltip>
                        }
                    >
                        <div className = 'ContentRow'>
                            <Image src={HK} style={{height:'32px', width:'32px'}}/>
                            &nbsp;&nbsp; Moved to Hong Kong 
                            <br/>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key= '5'
                        placement= 'left'
                        overlay={
                            <Tooltip>
                                Oct 1995 - Aug 2014
                            </Tooltip>
                        }
                    >
                        <div className = 'ContentRow' style={{backgroundColor: '#f3f1f7'}}>
                            <Image src={Home} style={{height:'32px', width:'32px'}}/>
                            &nbsp;&nbsp; Born in Kingston, Jamaica
                            <br/>
                        </div>
                    </OverlayTrigger>
                </Col>
            </Row>
            <br/><br/><br/>
        </Container>
    );
}

export default About;