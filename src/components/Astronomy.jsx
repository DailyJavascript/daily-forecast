import React from 'react';
import { displayTime, roundTemp, isDayTime } from '../utils'
import '../css/Astronomy.css';

class Astronomy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: 'day'
    }
  }

  handleClick(detail) {
    this.setState({showDetails: detail})
  }

  renderDayDetails() {
    return (this.state.showDetails === 'day') ?
        <div className="day-details">
          <div>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="yellow"/>
            </svg>
          </div>
          <div className="details">
            <span>Sunrise: { displayTime(this.props['sunriseTime'])}</span>
            <span>Sunset: { displayTime(this.props['sunsetTime'])}</span>
          </div>
        </div>
        : null
  }

  renderNightDetails() {
    const { moonInfo } = this.props;
    console.log(moonInfo)
    return (this.state.showDetails === 'night') ?
      <div>
      <div className="day-details">
        <div>
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="black"/>
          </svg>
        </div>
        <div className="details">
          <span>Moonrise: { moonInfo.moonData.moonRiseTime }</span>
          <span>Moonset: { moonInfo.moonData.moonSetTime }</span>
        </div>
      </div> 
        <div>
          <span>Current phase: { moonInfo.currentPhase }</span>
        </div>
      </div>
      : null
  }

  render() {
    return (
    <div className="astronomy">
      <div className="astronomy-header">
        Astronomy
      </div>
      <div className="astronomy-buttons">
        <button className="btn day-btn" autoFocus onClick={ () => this.handleClick('day') }>Day</button>
        <button className="btn night-btn" onClick={ () => this.handleClick('night')}>Night</button>
      </div>
      <div className="astronomy-details">
       { this.renderDayDetails() }
       { this.renderNightDetails() }
      </div>
    </div>
    )
  }
}

export default Astronomy;