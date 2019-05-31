import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Award from '../assets/icon/award.png'
import Carousel from 'react-bootstrap/Carousel'
import fyp1 from '../assets/img/presCup.png'
import fyp2 from '../assets/img/bestFyp.png'
import CollapseImg from './CollapseImg'

function Portfolio(){
    return(
        <Container fluid style={{backgroundColor:'#536e80'}} id='portfolio'>
            <Row>
                <Col  sm={12} md={{ span: 8, offset: 2}}>
                    <div className ='Heading'>
                        <br/><br/><br/>
                        <h1><font color="#cca000"><b>Portfolio</b></font></h1>
                        <hr/>
                    </div>
                </Col>
            </Row>
            <Row className='Content'>
                    <Col md={{ span: 8, offset: 2}} lg={{ span: 4, offset: 2}}  style={{backgroundColor:'#fdf9ec', paddingTop:'18px', boxShadow: "5px 5px 10px #313235"}}>
                        <p>
                            <font size="4"><strong><i>FACADÈ</i></strong>&nbsp;(Final Year Project)&nbsp; &#8226; &nbsp; 2017 - 2018</font><br/><br/>
                            <font size="3"><b><i>Finalist in HKUST President's Cup 2018 &nbsp; <Image src={Award} style={{heigh:'32px', width:'32px'}}/> &nbsp; HKUST CSE Best FYP 2017 - 2018</i></b></font><br/><br/>
                            <i>Facadè</i> is an <b>adaptive emotion-driven</b> computer game, which challenges the player to decipher what is <b>reality and illusion</b>.<br/><br/>
                            The game is set as dialogue-based interrogation game, where the player is asked questions regarding an event that they have no background knowledge on. The aim of the game is to be as consistent and convincing as possible so as to not induce suspicion in the emotionally-intelligent detectives.<br/><br/>
                            Our game uses two kinds of player input: <b>mouse-and-key-clicks</b> and also <b>emotional state</b>. We developed a <b>facial expression recognition</b> (FER) model which runs in realtime to predict the player's emotional state. <br/>
                        </p>
                    </Col>
                    <Col md={{ span: 8, offset: 2}} lg={{ span: 5, offset: 0}}>
                        <Carousel>
                            <Carousel.Item>
                                <iframe width="480" height="338"
                                src="https://www.youtube.com/embed/0Hsf40RPoYU">
                                </iframe>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={fyp1} style={{height:'338px', width:'480px'}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={fyp2} style={{height:'338px', width:'480px'}}/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
            </Row>
            <br/>
            <Row className='Content' >
                <Col sm={12} md={{ span: 8, offset: 2}}>
                    <p><font size="4"><b><i>TASK-ORIENTED DIALOGUE SYSTEM</i></b>&nbsp; &#8226; &nbsp; 2018</font><br/><br/>
                        A dialogue system that take user’s utterances to complete the task of restaurant reservations. <br/>The system assists users in booking reservations at a restaurant, and achieves this goal in five steps: process the user’s request and issue an API call, allow for modification of the request, display all relevant restaurant options from which the user can select the restaurant of their preference, provide additional details of the selected restaurant – all in a conversational dialogue format. <br/><br/>
                        The system is built as an end-to-end learning dialogue system built as a hybrid code network (HCN), trained initially using supervised learning and then optimized using reiforcement learning methods. <br/>
                    </p>
                    <br/>
                    <p><font size="4"><strong>MULTIMEDIA COMPUTING PROJECTS</strong>&nbsp; &#8226; &nbsp; 2017</font>
                        <br/><br/>Below is a sample of some of the web application projects I have worked on, mostly having to do with different types of multimedia: MIDI, Images and Audio. <br/><br/> <strong>Hover</strong> over the picture for the name and description of the project.<br/> <strong>Click</strong> on the picture to open a new tab to the actual application. <br/>Feel free to play around! 
                    </p>
                    <br/>
                </Col>
            </Row>
            <Row className='Content' style={{position:'relative'}}>
                <Col sm={{span: 8, offset: 2}} lg={{span:3, offset:2}}>
                    <CollapseImg imgNumber='1'/>
                </Col> 
                
                <Col sm={{span: 8, offset: 2}} lg={{span:3, offset:0}}>
                    <CollapseImg imgNumber='2'/>
                </Col>
                
                <Col sm={{span: 8, offset: 2}} lg={{span:3, offset:0}}>
                    <CollapseImg imgNumber='3'/>
                </Col>
                <div style={{width:'100%',position:'absolute',bottom:'-140px', backgroundColor:'#536e80'}}>
                    &nbsp;<br/><br/><br/><br/><br/>&nbsp;
                </div>
                <br/><br/><br/><br/>
            </Row>
        </Container>
    );
}

export default Portfolio;