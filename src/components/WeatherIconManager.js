import React from 'react';
import ClearDay from './icons/ClearDay';
import ClearNight from './icons/ClearNight';
import Cloudy from './icons/Cloudy';
import Fog from './icons/Fog';
import PartlyCloudyDay from './icons/PartlyCloudyDay';
import PartlyCloudyNight from './icons/PartlyCloudyNight';
import Rain from './icons/Rain';
import Sleet from './icons/Sleet';
import Snow from './icons/Snow';
import Wind from './icons/Wind';
import Sun from './icons/Sun';

const WeatherIconManager = (props) => {
  let { icon } = props;

  switch (icon) {
    case 'clear-day':
      return <Sun/>
    case 'clear-night':
      return <ClearNight/>
    case 'cloudy':
      return <Cloudy/>
    case 'fog':
      return <Fog/>
    case 'partly-cloudy-day':
      return <PartlyCloudyDay/>
    case 'partly-cloudy-night':
      return <PartlyCloudyNight/>
    case 'rain':
      return <Rain/>
    case 'sleet':
      return <Sleet/>
    case 'snow':
      return <Snow/>
    case 'wind':
      return <Wind/>
    default:
      return null;
  }
}

export default WeatherIconManager;
