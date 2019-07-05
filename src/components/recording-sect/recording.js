import React from 'react';
import Recorder from '../recorderTelaAdd/recorder';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }
  render() {
    
    return (
      <div style={{height:'100vh',width:'100%',display:'flex',flexDirection:'column',justifyContent:"flex-start",alignItems:"center"}}>
          <h2 style={{width:'100%',textAlign:'center',margin:"0"}}>Você deverá ler a seguinte frase:</h2>
          <h1 style={{width:'100%', color:'blue',textAlign:'center'}}>Eu sou o 007</h1>
          <Recorder/>
      </div>

    );
  }
}