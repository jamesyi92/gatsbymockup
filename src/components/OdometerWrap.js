import React, { Component } from 'react'
import Odometer from 'react-odometerjs'
import '../pages/odometer-theme-default.css'

export class OdometerWrap extends Component {

  constructor(props){
    super(props);

    this.state = {
        dometerValue: 0
    };
  }

  componentDidMount() {
    this.setState({
      odometerValue: 20743
    })
  }

  render() {
  const { odometerValue } = this.state;
  return (
      <div>
          <Odometer
              format="d"
              duration={ 500 }
              value={ odometerValue }
          />
      </div>
  );
  }
}

export default OdometerWrap;