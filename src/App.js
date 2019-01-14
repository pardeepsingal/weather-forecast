import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherForecast from "./components/weatherforecast";

class App extends Component {
  render() {
    return (
      // <div className="App-header">
      //   {/* <header> 
      //     <img src={logo} width="30%" alt="logo" /> 
      //   </header> */}
        <WeatherForecast />         
      // </div>
      
    );
  }
}

export default App;
