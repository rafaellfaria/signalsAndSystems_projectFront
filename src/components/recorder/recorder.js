import React, { Component } from 'react';
import RecorderJS from 'recorder-js';
import {Icon} from 'antd'
import './recorder.css'

import { getAudioStream, exportBuffer } from '../../utilities/audio';

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null,
      recording: false,
      recorder: null
    };
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
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
        recording: true
      },
      () => {
        recorder.start();
      }
    );
  }

  async stopRecord() {
    const { recorder } = this.state;

    const { buffer } = await recorder.stop()
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
      recording: false
    });
  }

  render() {
    const { recording, stream } = this.state;

    // Don't show record button if their browser doesn't support it.
    if (!stream) {
      return null;
    }

    return (
      <div>
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
    );
  }
}

export default Recorder;