import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TopNavBar from './components/TopNavBar.js'
import Header from './components/Header'
import About from './components/About'
import Porfolio from './components/Portfolio'
import Contact from './components/Contact'
import ExtraCur from './components/ExtraCur'
import upArrow from './assets/icon/up-arrow.png'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <Container fluid='true' className="App">
      <TopNavBar />
      <Header />
      <About />
      <Porfolio />
      <ExtraCur />
      <Contact />
      <div style={{heigh:'550px', backgroundColor: '#27292a', alignContent:'center', textAlign:'center'}}>
        <a href="#home"><Image className='DownArrow bounce'src={upArrow}/></a>
        ?<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </Container>
  );
}

export default App;
