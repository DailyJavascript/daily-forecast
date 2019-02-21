import React from 'react';
import '../../css/Weather.css';;

class PartlyCloudyDay extends React.Component {
  render() {
    return (
      <div className="icon" title="Partly Cloudy Day">
        <svg id="partly-cloudy-day" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Partly Cloudy Day</title>
          <g>
            <circle className="sun-body" cx="30.034" cy="30" r="22%"></circle>
          <path id="pcd-cloud" d="M97,54A20,20,0,0,1,64.62,69.69,27,27,0,0,1,33.7,68.52,17.49,17.49,0,1,1,21,39a16.84,16.84,0,0,1,3.12.29,27,27,0,0,1,49.69-5A19.71,19.71,0,0,1,77,34,20,20,0,0,1,97,54Z" style={{fillOpacity:"100", fillRule: "evenodd"}}/><path d="M77,76.5a22.2,22.2,0,0,1-12.51-3.81,29.49,29.49,0,0,1-30.56-1A20,20,0,1,1,21,36.5c.47,0,.94,0,1.41.05a29.51,29.51,0,0,1,52.74-5c.62-.05,1.23-.08,1.85-.08a22.5,22.5,0,0,1,0,45ZM64.77,66.62l1.41,1.11A17.28,17.28,0,0,0,77,71.5a17.5,17.5,0,0,0,0-35,17.25,17.25,0,0,0-2.79.23L72.45,37l-.84-1.57A24.51,24.51,0,0,0,26.52,40l-.64,2.16-2.22-.42A14.36,14.36,0,0,0,21,41.5a15,15,0,0,0,0,30,14.79,14.79,0,0,0,10.88-4.69l1.54-1.64,1.79,1.36a24.47,24.47,0,0,0,28,1.06Z"/>
          </g>
        </svg>
      </div>
    )
  }
}

export default PartlyCloudyDay;
