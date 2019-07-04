import React from 'react';
import {Row, Col, Progress, Icon} from 'antd'
import {Link} from 'react-router-dom'
export default class Home extends React.Component {

  render() {
    
    return (
      <div style={{height:'100vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',position:'static'}}>
        <Link style={{textDecoration:'none',textTransform:'none'}} to='/recordingSection'>
        <div style={{width:'48.5vw', height:'100%', display:'flex',justifyContent:"center",alignItems:'center',textDecoration:'none'}}>
          <div style={{textDecoration:'none',textTransform:'none',cursor:'pointer',display:'flex',justifyContent:"center",alignItems:'center',width:'320px',height:'320px',borderRadius:'100%',border:'3px solid black',fontSize:'80px'}}><Icon style={{textDecoration:'none',textTransform:'none',color:'black'}} type="plus" /></div>
        </div>
        </Link>
        <div style={{height:'70%', width:'2px',backgroundColor:"black"}}/>
        <Link style={{textDecoration:'none',textTransform:'none'}} to='/discoveringSection'>
        <div style={{width:'48.5vw', height:'100%', display:'flex',justifyContent:"center",alignItems:'center',textDecoration:'none'}}>
          <div style={{textDecoration:'none',textTransform:'none',cursor:'pointer',display:'flex',justifyContent:"center",alignItems:'center',width:'320px',height:'320px',borderRadius:'100%',border:'3px solid black',fontSize:'80px'}}><Icon style={{textDecoration:'none',textTransform:'none',color:'black'}}type="sound" /></div>
        </div>
        </Link>
      </div>
    );
  }
}