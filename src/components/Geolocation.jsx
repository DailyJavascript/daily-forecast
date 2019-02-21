import { Component } from 'react';

class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = { geoPosition: null, error: false };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
        let options = {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: Infinity
        };

      const success = (userPosition) => {
        this.setState({geoPosition: userPosition});
      }
      const error = (err) => { this.setState({ geoPosition: true, error: true})}

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Geolocation;

// class Geolocation extends Component {
//   constructor() {
//     super();
//     this.state = { geoPosition: null}
//     this.renderChildren = this.renderChildren.bind(this);
//   }
//
//   renderChildren() {
//     return React.Children.map( this.props.children, child => {
//       return React.cloneElement(child, { geoPosition: this.state.geoPosition })
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         { this.renderChildren() }
//       </div>
//     )
//   }
// }
//
// export default Geolocation;
