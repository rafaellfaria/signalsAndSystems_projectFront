import React, { Component } from 'react';
import RecorderJS from 'recorder-js';
import {Icon, Input, notification } from 'antd'
import './recorder.css'
import waveformPic from './assets/waveformPic.png'
import waveformGif from './assets/waveformAudio.gif'

import { getAudioStream, exportBuffer } from '../../utilities/audio';

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null,
      recording: false,
      recorder: null,
      valueNome: '',
      showPic:true,
    };
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  onChange (value){
    this.setState({
      valueNome: value.target.value
    })
  }

  async componentDidMount() {
    let stream;

    try {
      stream = await getAudioStream();
    } catch (error) {
      // Users browser doesn't support audio.
      // Add your handler here.
      console.log(error);
    }

    this.setState({ stream });
  }

  startRecord() {
      const { stream } = this.state;

      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const recorder = new RecorderJS(audioContext);
      recorder.init(stream);

      this.setState(
        {
          recorder,
          recording: true,
          showPic:false
        },
        () => {
          recorder.start();
        }
      );
  }

  async stopRecord() {

    const { recorder } = this.state;

    const { buffer } = await recorder.stop()
    console.log(buffer)
    const audio = exportBuffer(buffer[0]);

    // Process the audio here.
    console.log(audio);
    let formData = new FormData();
    formData.append('file', audio);
    console.log(formData)
    fetch('http://localhost:5000/file', {
      origin: "*",  
      method: "POST",
      body: formData
    }).then((res) => res.json())
    .then(res => console.log(res))
    this.setState({
      recording: false,
      showPic:true
    });
  }
  openNotification = () => {
    const args = {
      message: 'Nome não inputado',
      description:
        'Precisamos que você inpute o seu nome antes da gravação para que seja incluído no nosso banco.',
      duration: 5,
    };
    notification.open(args);
  };

  render() {
    const { recording, stream } = this.state;
    
    // Don't show record button if their browser doesn't support it.
    if (!stream) {
      return null;
    }

    return (
      <div style={{display:'flex', flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
          <div>
            {this.state.showPic && 
              <img src={waveformPic} style={{display:'block'}}/>
            }
            {!this.state.showPic && 
              <img src={waveformGif} style={{display:'block'}}/>
            }
              
          </div>
          <div style={{marginTop:'10px'}}>
            <button className="buttonRecords"
              onClick={() => {
                recording ? console.log('already recording') : this.startRecord();
              }}
              >
              <Icon type="play-circle" />
            </button>
            <button className="buttonRecords"
              onClick={() => {
                recording ? this.stopRecord() : console.log('no audios being recorded');
              }}
              >
              <Icon type="pause-circle" />
            </button>
          </div>
      </div>
      
      
    );
  }
}

export default Recorder;