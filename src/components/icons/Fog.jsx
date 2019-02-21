import React from 'react';
import '../../css/Weather.css';

class Fog extends React.Component {
  render() {
    return (
  		<div className="icon" title="Fog">
        <svg id="fog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Fog</title>
          <g>
            <path id="f-cloud" d="M3.25,49.5A17.51,17.51,0,0,1,20.75,32a16.84,16.84,0,0,1,3.12.29,27,27,0,0,1,49.69-5A19.71,19.71,0,0,1,76.75,27a20,20,0,0,1,20,20,20.24,20.24,0,0,1-.12,2.22" style={{fill:"#fff", fillOpacity:"0", fillRule:"evenodd"}}/>
            <path d="M3.25,52a2.5,2.5,0,0,1-2.5-2.5,20,20,0,0,1,20-20c.47,0,.94,0,1.41.05a29.51,29.51,0,0,1,52.74-5c.62-.05,1.23-.08,1.85-.08A22.53,22.53,0,0,1,99.25,47a22.78,22.78,0,0,1-.14,2.49,2.5,2.5,0,1,1-5-.55A17.75,17.75,0,0,0,94.25,47a17.52,17.52,0,0,0-17.5-17.5,17.25,17.25,0,0,0-2.79.23L72.2,30l-.84-1.57A24.51,24.51,0,0,0,26.27,33l-.64,2.16-2.22-.42a14.36,14.36,0,0,0-2.66-.25,15,15,0,0,0-15,15A2.5,2.5,0,0,1,3.25,52Z"/>
            <g id="f-fog">
              <path id="f-fog1" d="M97,60H3a2,2,0,0,1,0-4H97a2,2,0,0,1,0,4Z"/>
              <path id="f-fog2" d="M97,70H3a2,2,0,0,1,0-4H97a2,2,0,0,1,0,4Z"/>
              <path id="f-fog3" d="M97,80H3a2,2,0,0,1,0-4H97a2,2,0,0,1,0,4Z"/>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Fog;
