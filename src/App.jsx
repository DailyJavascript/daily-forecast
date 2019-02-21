import React, { Component } from 'react';
import './css/App.css';
import FetchWeather from './components/FetchWeather.jsx';
import Loading from './components/Loading.jsx';
import Geolocation from './components/Geolocation.jsx';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Geolocation>
        { (data) => data.geoPosition ? <FetchWeather {...data}/> : <Loading/> }
      </Geolocation>
    </div>
    );
  }
}

export default App;
