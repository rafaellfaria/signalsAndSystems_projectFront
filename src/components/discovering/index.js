import React from 'react';
import {Row, Col, Progress, Icon} from 'antd'
import {Link} from 'react-router-dom'

import Recorder from '../recorder/recorder';

export default class Home extends React.Component {

  render() {
    
    return (
      <div style={{height:'100vh',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'static'}}>
          <h1>Faça uma gravação e nós descobriremos quem está falando!</h1>
          <Recorder />
          {/* a lista deveria aparecer aqui dependendo de alguma variavel, ou sei la  */}
      </div>
    );
  }
}