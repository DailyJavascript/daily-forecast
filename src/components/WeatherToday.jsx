import React from 'react';
import '../css/App.css';
import WeatherIconManager from './WeatherIconManager';
import WeeklyWeather from './WeeklyWeather.jsx';
import HourlyRainGraph from './HourlyRainGraph.jsx';
import Astronomy from './Astronomy.jsx';
import WeatherTodayDetails from './WeatherTodayDetails.jsx';
import Health from './Health.jsx';
import { displayTime, roundTemp, isDayTime } from '../utils'
import { resp } from '../responseFixture';

class WeatherToday extends React.Component {
  constructor(props) {
    super(props);
    this.formatLocation = this.formatLocation.bind(this);
  }

  formatLocation(loc) {
    if (loc) {
        return loc.split(',').filter( function(element) { return element.trim() !== 'USA'}).join()
    }
  }

  // <span>Chance of rain: { currently.precipProbability } %</span>

  render() {
    let { currently, location, daily, hourly, moonInfo } = this.props
    const isDay = isDayTime(currently.time, daily.data[0].sunriseTime, daily.data[0].sunsetTime);
    const sunInfo = {
      sunriseTime: daily.data[0].sunriseTime,
      sunsetTime: daily.data[0].sunsetTime
    }

    const setBackgroundColor = function() {
      if (isDay) {
        return 'day'
      } else {
        return 'night'
      }
    }
    return (
      <div>
        <div className={`current-weather ${setBackgroundColor()}`}>
          <div className="column-center-today full-screen-width">
            <h1 className="center-text">{ this.formatLocation(location) }</h1>
            <span className="center-text today-font">Today - { currently.summary }</span>
            <div className="temp-icon">
              <WeatherIconManager icon={ currently.icon }/>
              <div className="row-today">
                <span className="degree arrow-down">&darr;{ roundTemp(daily.data[0]['temperatureMin'])}</span>
                <span className="temp degree">{ roundTemp(currently.temperature) }</span>
                <span className="degree">&uarr;{ roundTemp(daily.data[0]['temperatureMax'])}</span>
              </div>
            </div>
          </div>
        </div>
      <div className="details-row">
        <Astronomy {...sunInfo} moonInfo={moonInfo}/>
        <WeatherTodayDetails {...currently}/>
        <Health/>
      </div>
      </div>
    )
  }
}

export default WeatherToday;

      // <HourlyRainGraph {...hourly}/>