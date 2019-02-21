import React from 'react';
import '../../css/Weather.css';

class PartlyCloudyNight extends React.Component {
  render() {
    return (
  		<div className="icon" title="Partly Cloudy Night">
        <svg id="partly-cloudy-night" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Partly Cloudy Night</title>
          <g><g id="pcn-stars">
          <polygon points="40.65 4.81 41.33 6.25 42.84 6.48 41.74 7.6 42 9.18 40.65 8.43 39.3 9.18 39.56 7.6 38.47 6.48 39.98 6.25 40.65 4.81" style={{fillRule:"evenodd"}}/>
          <path d="M42,9.43a.25.25,0,0,1-.12,0l-1.23-.68-1.23.68a.25.25,0,0,1-.26,0,.25.25,0,0,1-.1-.24l.24-1.46-1-1a.25.25,0,0,1,.14-.42L39.81,6l.62-1.32a.26.26,0,0,1,.45,0L41.5,6l1.38.21a.25.25,0,0,1,.14.42l-1,1,.24,1.46a.25.25,0,0,1-.25.29ZM40.65,8.18a.25.25,0,0,1,.12,0l.9.5L41.5,7.64a.25.25,0,0,1,.07-.21l.75-.77-1-.16a.25.25,0,0,1-.19-.14l-.45-1-.45,1A.25.25,0,0,1,40,6.5l-1,.16.75.77a.25.25,0,0,1,.07.21l-.17,1.07.9-.5A.25.25,0,0,1,40.65,8.18Z"/>
          <polygon points="65.88 9.86 66.84 11.92 69 12.25 67.44 13.85 67.8 16.1 65.88 15.04 63.95 16.1 64.31 13.85 62.75 12.25 64.91 11.92 65.88 9.86" style={{fillRule:"evenodd"}}/>
          <path d="M67.8,16.35a.25.25,0,0,1-.12,0l-1.81-1-1.81,1a.25.25,0,0,1-.37-.26L64,13.93l-1.47-1.51a.25.25,0,0,1,.14-.42l2-.31.91-1.93a.25.25,0,0,1,.23-.14h0a.25.25,0,0,1,.23.14L67,11.69,69,12a.25.25,0,0,1,.14.42L67.7,13.93l.35,2.13a.25.25,0,0,1-.25.29Zm-4.53-3.93,1.22,1.25a.25.25,0,0,1,.07.21l-.29,1.75,1.48-.82a.25.25,0,0,1,.24,0l1.48.82-.29-1.75a.25.25,0,0,1,.07-.21l1.22-1.25-1.68-.26a.25.25,0,0,1-.19-.14l-.74-1.57L65.14,12a.25.25,0,0,1-.19.14Z"/>
          <polygon points="6.3 11.73 7.27 13.79 9.42 14.12 7.86 15.72 8.23 17.98 6.3 16.91 4.37 17.98 4.74 15.72 3.18 14.12 5.34 13.79 6.3 11.73" style={{fillRule:"evenodd"}}/>
          <path d="M8.23,18.23a.25.25,0,0,1-.12,0l-1.81-1-1.81,1a.25.25,0,0,1-.37-.26l.35-2.13L3,14.29a.25.25,0,0,1,.14-.42l2-.31.91-1.93a.25.25,0,0,1,.23-.14h0a.25.25,0,0,1,.23.14l.91,1.93,2,.31a.25.25,0,0,1,.14.42L8.13,15.8l.35,2.13a.25.25,0,0,1-.25.29ZM3.7,14.29l1.22,1.25a.25.25,0,0,1,.07.21L4.7,17.51l1.48-.82a.25.25,0,0,1,.24,0l1.48.82-.29-1.75a.25.25,0,0,1,.07-.21L8.9,14.29,7.23,14A.25.25,0,0,1,7,13.9L6.3,12.32,5.56,13.9a.25.25,0,0,1-.19.14Z"/>
          <polygon points="85 21.9 85.67 23.34 87.18 23.57 86.09 24.69 86.35 26.27 85 25.52 83.64 26.27 83.9 24.69 82.81 23.57 84.32 23.34 85 21.9" style={{fillRule:"evenodd"}}/>
          <path d="M86.35,26.52a.25.25,0,0,1-.12,0L85,25.81l-1.23.68a.25.25,0,0,1-.26,0,.25.25,0,0,1-.1-.24l.24-1.46-1-1a.25.25,0,0,1,.14-.42l1.38-.21.62-1.32a.26.26,0,0,1,.45,0l.62,1.32,1.38.21a.25.25,0,0,1,.14.42l-1,1,.24,1.46a.25.25,0,0,1-.25.29ZM85,25.27a.25.25,0,0,1,.12,0l.9.5-.17-1.07a.25.25,0,0,1,.07-.21l.75-.77-1-.16a.25.25,0,0,1-.19-.14l-.45-1-.45,1a.25.25,0,0,1-.19.14l-1,.16.75.77a.25.25,0,0,1,.07.21L84,25.8l.9-.5A.25.25,0,0,1,85,25.27Z"/></g><path id="pcn-moon" d="M28.36,15.36h.17a20.08,20.08,0,0,0-1.61,7.92A20.31,20.31,0,0,0,37,40.75a14.17,14.17,0,1,1-8.66-25.39m0-3A17.17,17.17,0,1,0,42.17,39.73a17.17,17.17,0,0,1-8.89-26.65,17,17,0,0,0-4.92-.72Z"/><path id="pcn-cloud" d="M97,54A20,20,0,0,1,64.62,69.69,27,27,0,0,1,33.7,68.52,17.49,17.49,0,1,1,21,39a16.84,16.84,0,0,1,3.12.29,27,27,0,0,1,49.69-5A19.71,19.71,0,0,1,77,34,20,20,0,0,1,97,54Z" style={{fillOpacity:"100", fillRule:"evenodd"}}/>
          <path d="M77,76.5a22.2,22.2,0,0,1-12.51-3.81,29.49,29.49,0,0,1-30.56-1A20,20,0,1,1,21,36.5q.71,0,1.41.05a29.51,29.51,0,0,1,52.74-5c.62-.05,1.23-.08,1.85-.08a22.5,22.5,0,0,1,0,45ZM64.77,66.62l1.41,1.11A17.28,17.28,0,0,0,77,71.5a17.5,17.5,0,0,0,0-35,17.25,17.25,0,0,0-2.79.23L72.45,37l-.84-1.57A24.51,24.51,0,0,0,26.52,40l-.64,2.16-2.22-.42A14.35,14.35,0,0,0,21,41.5a15,15,0,0,0,0,30,14.79,14.79,0,0,0,10.88-4.69l1.54-1.64,1.79,1.36a24.47,24.47,0,0,0,28,1.06Z"/>
          </g>
        </svg>
      </div>
    )
  }
}

export default PartlyCloudyNight;
