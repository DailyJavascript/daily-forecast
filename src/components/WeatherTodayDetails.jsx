import React from 'react';
import '../css/Details.css';

class WeatherTodayDetails extends React.Component {
  render() {
    return (
    <div className="weather-details">
       <div className="details-header">
        Details
      </div>
      <div>
        <img src="https://png.icons8.com/ios/100/000000/humidity.png"/>
        <span>Humidity: {this.props.humidity}</span>
      </div>
      <div><img src="https://png.icons8.com/windows/100/000000/dew-point.png"/>Dew Point: {this.props.dewPoint}</div>
      <div><img src="https://png.icons8.com/ios/100/000000/visible.png"/>Visibility: {this.props.visibility}</div>
      <div><img src="https://png.icons8.com/wired/100/000000/clouds.png"/>Cloud cover: {this.props.cloudCover}</div>
      <div><img src="https://png.icons8.com/ios/100/000000/pressure.png"/>Pressure: {this.props.pressure}</div>
    </div>
    )
  }
}

export default WeatherTodayDetails;