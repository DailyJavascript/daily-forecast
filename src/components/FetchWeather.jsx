import React from 'react';
import WeatherToday from './WeatherToday';
import WeeklyWeather from './WeeklyWeather';
import { fakeResp } from '../responseFixture';
import $ from 'zepto-modules';

class FetchWeather extends React.Component {
  constructor(props) {
    super(props)
    this.state = { weather: null }
  }

  componentDidMount() {
    if (this.props.error) {
      this.setState({ weather: fakeResp})
    } else {
      let request = {
        type: 'GET',
        url: 'http://localhost:8081/daily-forecast',
        data: JSON.stringify({
          latitude: this.props.geoPosition.coords.latitude,
          longitude: this.props.geoPosition.coords.longitude
        })
      }
      request.success = (resp) => {
        this.setState({ weather: resp })
      }

      request.error = (resp) => {
        this.setState({ weather: fakeResp})
      }
      
      $.ajax(request)
    }
  }

  render() {
    let { weather } = this.state;
    let weatherToday = (weather) ? <WeatherToday {...weather}/> : null;
    let weeklyWeather = (weather) ? <WeeklyWeather {...weather}/> : null;
    return (
      <div>
        { weatherToday }
        { weeklyWeather }
      </div>
    )
  }
}

export default FetchWeather;
