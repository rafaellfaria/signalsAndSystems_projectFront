import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logoCin from './assets/logo_cin.png'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

  render() {
    
    return (
      <div style={{flexGrow:'1', maxHeight:'80px', fontFamily:'comic-sans'}}>
        <AppBar style={{height:'80px', backgroundColor:'rgb(0,102,153)'}} position="static">
          <Toolbar style={{height:'100%'}}>
            <Typography variant="h" style={{flexGrow:'1'}}>
              <img style={{height:'60px',width:'auto'}} src={logoCin}/>
            </Typography>
            <div style={{display: 'flex', flex: 2, justifyContent: 'start', alignContent: 'center'}}>
              <h3 style={{alignSelf:'center', color: 'white', fontSize: 22}}>Signal and Systems - Speaker Recognition</h3>
            </div>
            <Link to='/'style={{display:'flex', flex:1, justifyContent:'flex-end', textDecoration:'none'}}><Button style={{color:'white',textTransform:'none',textDecoration:'none'}}>HOME</Button></Link>
          </Toolbar>
        </AppBar>
    </div>
    );
  }
}