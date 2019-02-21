import React from 'react';
import '../css/WeeklyWeather.css';
import '../css/App.css';
import WeatherIconManager from './WeatherIconManager';
import { displayTime, roundTemp } from '../utils'

const WeeklyWeather = (props) => {
const { daily: {data} } = props

  function renderHighLowTemps(dailyWeather) {
    return (
      <div>
        <span className="degree"> {roundTemp(dailyWeather.temperatureMax)}</span>
        <span className="degree"> {roundTemp(dailyWeather.temperatureMin)}</span>
      </div>
    )
  }

  function renderDayName(data) {
    const today = new Date(data.time * 1000);
    const dayNameMapper = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }

    return dayNameMapper[today.getDay()]
  }


  function renderWeeklyWeather() {
    return data.map( (dailyWeather, i) => {
      if (i === 0) { return null; }
      return (
        <div key={i} className="weekly-weather-day">
          <div className="test1">{ renderDayName(dailyWeather) }</div>
          <div className="test2"><WeatherIconManager icon={dailyWeather.icon}/></div>
          <div className="test3">{ renderHighLowTemps(dailyWeather) }</div>
        </div>
      )
    })
  }



  return (
    <div className="weekly-weather">
      { renderWeeklyWeather() }
    </div>
  )
}

export default WeeklyWeather;
