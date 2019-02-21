import '../../css/Weather.css';
import React from 'react';

class Sun extends React.Component {
  render() {
    return (
      <div className="icon" title="Sun">
        <svg id="clear-day" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
           <linearGradient id="MyGradient">
             <stop offset="5%" stopColor="#f2994a" />
             <stop offset="95%" stopColor="#f2c94c" />
           </linearGradient>
          </defs>
          <title>Clear Day</title>
          <g>
            <path id="cd-sun" d="M49.5,27A22.5,22.5,0,1,1,27,49.5,22.53,22.53,0,0,1,49.5,27m0-5A27.5,27.5,0,1,0,77,49.5,27.5,27.5,0,0,0,49.5,22Z"/>
            <circle className="sun-body" cx="50.034" cy="50" r="22%">
            </circle>
          </g>
        </svg>
      </div>
    )
  }
}

export default Sun;

// <g id="cd-rays">
//   <path d="M16.5,52H2.5a2.5,2.5,0,0,1,0-5h14a2.5,2.5,0,0,1,0,5Z"/>
//   <path d="M96.5,52h-14a2.5,2.5,0,0,1,0-5h14a2.5,2.5,0,0,1,0,5Z"/>
//   <path d="M49.5,99A2.5,2.5,0,0,1,47,96.5v-14a2.5,2.5,0,0,1,5,0v14A2.5,2.5,0,0,1,49.5,99Z"/>
//   <path d="M49.5,19A2.5,2.5,0,0,1,47,16.5V2.5a2.5,2.5,0,0,1,5,0v14A2.5,2.5,0,0,1,49.5,19Z"/>
//   <path d="M82.73,85.23A2.49,2.49,0,0,1,81,84.5l-9.9-9.9a2.5,2.5,0,0,1,3.54-3.54L84.5,81a2.5,2.5,0,0,1-1.77,4.27Z"/>
//   <path d="M26.17,28.67a2.49,2.49,0,0,1-1.77-.73L14.5,18A2.5,2.5,0,0,1,18,14.5l9.9,9.9a2.5,2.5,0,0,1-1.77,4.27Z"/>
//   <path d="M72.83,28.67a2.5,2.5,0,0,1-1.77-4.27L81,14.5A2.5,2.5,0,0,1,84.5,18l-9.9,9.9A2.49,2.49,0,0,1,72.83,28.67Z"/>
//   <path d="M16.27,85.23A2.5,2.5,0,0,1,14.5,81l9.9-9.9a2.5,2.5,0,0,1,3.54,3.54L18,84.5A2.49,2.49,0,0,1,16.27,85.23Z"/>
// </g>
