import React from 'react'
import Image from 'react-bootstrap/Image'
import headerImg from '../assets/35mm.jpg'
import downArrow from '../assets/icon/down-arrow.png'

function Header(){
    return(
        <div className='Header-Img' id="home">
            <Image src={headerImg} fluid style={{marginTop: 70}}/> 
            <div className='Header-Text'>
                <p>Christine &nbsp;Tse</p>
                <p className='Header-SubText'>HTML5 Game Developer • Chinese-Jamaican • HKUST Graduate • Toronto Based</p>
            </div>
            <div style={{ alignContent:'center', textAlign:'center'}}>
                <a href="#about"><Image className='DownArrow bounce'src={downArrow}/></a>
            </div>
        </div>
        
    );
}

export default Header;