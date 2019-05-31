import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import piano from '../assets/img/piano3.jpg'
import camera from '../assets/img/camera2.jpg'
import soundwave from '../assets/img/soundwave2.jpg'

class CollapseImg extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHoverEnter = this.handleMouseHoverEnter.bind(this);
        this.handleMouseHoverExit = this.handleMouseHoverExit.bind(this);
        this.handleMouseHoverCaptionExit = this.handleMouseHoverCaptionExit.bind(this);
        this.handleMouseHoverCaptionEnter = this.handleMouseHoverCaptionEnter.bind(this);

        this.state = {
            isHovering: false,
            isHoveringCaption: false,
            imgName:'temp',
            imgMsg:'temp',
            href:'temp',
            imgCaption:'temp'
        };
        this.handleWhichImg = this.handleWhichImg.bind(this)();
    }

    handleWhichImg(){
        if(this.props.imgNumber === '1'){
            this.state.imgName = piano;
            this.state.imgMsg = "A MIDI system which allows you to play a whimsical tune! \n By using either the virtual keyboard or the musical whitebox, you can play a wide variety of musical sounds. \n\nYou have the option to change the: chord mode, major or minor key, or even the musical instrument!";
            this.state.href = "https://christse02.github.io/proj/lab01/index.html";
            this.state.imgCaption="MIDI MUSIC PLAYING SYSTEM";
        }
        else if(this.props.imgNumber === '2'){
            this.state.imgName = camera;
            this.state.imgMsg = "An image processing system which allows you to upload pictures and edit it! \n Like a simple version of photoshop, you can add simple filters and spacial effects to really enhance your images!";
            this.state.href = "https://christse02.github.io/proj/lab06/index.html";
            this.state.imgCaption="IMAGE PROCESSING SYSTEM";
        }
        else if(this.props.imgNumber === '3'){
            this.state.imgName = soundwave;
            this.state.imgMsg = "An audio processing system which allows you to create different sounds from sample waves and post-processors.\n Similar to Audacity, you can do simple enhancements to your music sample to change it! \n You can also upload your own music in JSON format and edit that too!";
            this.state.href = "https://christse02.github.io/proj/lab03/index.html";
            this.state.imgCaption="AUDIO PROCESSING SYSTEM";
        }
    }

    handleMouseHoverEnter(){
        this.setState({isHovering: true})
    } 
    handleMouseHoverExit(){
        if(this.state.isHoveringCaption){ //if hovering over image and caption
            this.setState({isHovering: true})
        }
        else if(!this.state.isHoveringCaption){ //not hovering over caption
            this.setState({isHovering: false})
        }
    } 

    handleMouseHoverCaptionEnter(){
        this.setState({
            isHovering: true,
            isHoveringCaption:true,
        })
    }
    handleMouseHoverCaptionExit(){
        this.setState({
            isHoveringCaption:false,
        })
    }

    render() {
    return (
        <div>
            <a href={this.state.href} target="_blank" >
                <Image 
                    src={this.state.imgName} 
                    className="CollapseImg"
                    style={{width:"234px", height:"358px", position:'relative'}}
                    onMouseEnter={this.handleMouseHoverEnter}
                    onMouseLeave={this.handleMouseHoverExit}
                />
            </a>
            <br/><br/>
            {
                this.state.isHovering &&
                <div>
                    <p align="justify">{this.state.imgMsg}</p>
                    <div onMouseEnter={this.handleMouseHoverCaptionEnter} onMouseLeave={this.handleMouseHoverCaptionExit} >
                        <p style={{position:'absolute', top:'145px', left:'30px', color:'#ffe279', fontWeight:'bold', fontSize:'16px'}}>
                            {this.state.imgCaption}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
    }
}

export default CollapseImg;