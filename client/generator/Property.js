import React, { Component, PropTypes } from 'react';
import Config from './Config';

class Property extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h2>{Config.displayName}</h2> 
      </div>
    )
  }
}

export default Property;