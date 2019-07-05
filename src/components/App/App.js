import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import * as ROUTES from '../../constants/routes';
import Header from '../Header/header';
import home from '../home/home'
import {Row, Col} from 'antd'
import recordingSect from '../recording-sect/recording.js'
import discoveringSect from '../discovering/index'
import 'antd/dist/antd.css'
class App extends React.Component{
  render(){
    return(
      <Router>
        <Header></Header>
        <Route exact path={ROUTES.LANDING} component={home}></Route>
        <Route path={ROUTES.RECORDING_SECTION} component={recordingSect}></Route>
        <Route path={ROUTES.DISCOVERING_SECTION} component={discoveringSect}></Route>
      </Router>
    );
  }
}

export default App;
