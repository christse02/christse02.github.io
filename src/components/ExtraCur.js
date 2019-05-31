import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import hart from '../assets/img/hart.jpg'
import Carousel from 'react-bootstrap/Carousel'

function ExtraCur(){
    return(
        <Container fluid style={{backgroundColor:'#d5cfe2'}} >
            <Row>
                <Col sm={12} md={{ span: 8, offset: 2}}>
                    <div className ='Heading'>
                        <br/><br/><br/><br/>
                        <h1><b>Extra Curricular</b></h1>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
            <Row className="Content">
                <Col sm={12} md={{span:8, offset:2}} lg={{ span: 5, offset: 2}}>
                    <Carousel>
                        <Carousel.Item>
                            <iframe width="520" height="364"
                            src="https://www.youtube.com/embed/jaCnGfD9ThU">
                            </iframe>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={hart} style={{width:"520px" , height:"364px"}}/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={12} md={{span:8, offset:2}} lg={{ span: 3, offset: 0}} style={{backgroundColor:'#fdf9ec', paddingTop:'18px', boxShadow: "5px 5px 10px #313235"}}>
                    <p>
                    <strong><font size="3">PUBLIC ART INTERVENTIONS &nbsp; &#8226; &nbsp; 2018</font></strong>
                    <br/>
                    <i>Creator & Participant</i><br/><br/>
                        Worked in a team to create a public art installment on HKUST campus to promote art and creativity.
                        Our work <i>Scope</i> was a piece which played on the themes of dimensionality and perspective, by creating a 3D shape in the negative space of 2D sheets of paper.
                        We were all responsible for concept design, material gathering, implementation and installing the exhibition.
                    </p>
                    <br/><br/>
                </Col>
            </Row>
            <br/><br/>
            <Row className='Content'>
                <Col sm={12} md={{ span: 8, offset: 2}}>
                <p>
                    <strong><font size="3">CONTEMPORARY DANCE &nbsp; &#8226; &nbsp; 2017</font></strong>
                    <br/>
                    <i>Dancer & Assistant Choreographer</i>
                    <br/><br/>
                        Our team of five was responsible for choreographing and preforming a 5 minute dance using various contemporary dance techniques learnt.
                        We preformed for the HKUST HART division, open any HKUST members.
                        The concept of our performance was to embody and portray the five stages of love and loss.
                    <br/><br/>
                    </p>
                    <p>
                    <strong><font size="3">HKUST SU ART CLUB &nbsp; &#8226; &nbsp; 2016 - 2017</font></strong>
                    <br/>
                    <i>Public Affairs Secretary</i>
                    <br/><br/>
                        Responsible for hosting and organizing events, promoting group fundraisers, and activities on social media.
                        I was also responsible for communicating with HKUST's Student Affairs Office and writing up the application for a mandatory health course (HLTH1010) endorsement. <br/><br/>
                        Throughout my time on the Art Club committee, I hosted my own art workshop and also assisted in two others. I also hosted "Art Around", an event which provides a platform students and faculty
                        to interact outside of the classroom, using art as a medium.
                    <br/><br/>
                    </p>
                    <p>
                    <strong><font size="3">CHINESE BENEVOLENT ASSOCIATION OF JAMAICA &nbsp; &#8226; &nbsp; 2010 - 2014</font></strong>
                    <br/>
                    <i>Cultural Representative, Performer, Community Volunteer</i>
                    <br/><br/>
                        Worked closely with the Chinese Benevolent Association of Jamaica (CBA) youth group to help promote and bring awareness of Chinese culture in Jamaica.
                        I assisted with this by regularly preforming traditional Chinese dances, like fan and ribbon dance for public events, eg. Jamaica's 2012 Independance Day Gala. <br/>
                        I also helped with many fundraising events, and also worked with young children, by teaching and training in dance. <br/><br/>
                        I participated in community service work by helping serve and distribute food to those less-fortunate and homeless. We also took trips to various children's and elderly homes, to assist feed those who can't help themselves.
                    <br/><br/>
                    </p>
                    <p>
                    <strong><font size="3">IMMACULATE CONCEPTION HIGH SCHOOL READING SOCIETY &nbsp; &#8226; &nbsp; 2012 - 2014</font></strong>
                    <br/>
                    <i>Public Relations Officer</i>
                    <br/><br/>
                        We aimed to promote reading and learing both within our highschool, and within public kindergartens and primary schools in Jamaica.
                        We did community service by workeing closely with primary school students struggling with reading,
                        by explaining and helping with their assignments, and reading stories to young children groups.<br/><br/>
                        I was responsible for managing promotional work and events like a book donation drive, and also coordinating collaborative events with other societies.
                        <br/><br/>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ExtraCur;