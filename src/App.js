import React, { Component } from 'react';
//router
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
//material ui & styles
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
//app skeleton
import { AppHeader } from './layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CssBaseline/>
      
          <Routes/>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
