import React from 'react';

class Loading extends React.Component {
  render() {
    return(
      <div className="loading-ripple">
        <h1>Loading Weather...</h1>
        <svg width='182px' height='182px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ripple">
          <rect x="0" y="0" width="100" height="100" fill="none"></rect>
          <g>
            <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle>
          </g>
          <g>
            <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="0;22;44"></animate>
            </circle>
          </g>
        </svg>
      </div>
    )
  }
}

export default Loading;
