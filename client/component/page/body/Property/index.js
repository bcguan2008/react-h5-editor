import React, { Component, PropTypes } from 'react';
import PropertyContainer from './PropertyContainer';

export default class Property extends Component {
  constructor() {
    super()
  }

  render() {
    const {components} = this.props;

    let currentComponent;

    if (components && components.length > 0) {
      currentComponent = components.find((component) => {
        return component.showProperty;
      })
    } 

    /**
     * 没有选中要编辑的Component
     */
    if (!currentComponent) {
      return (<div><h2>文本</h2></div>)
    }
    
    return (
      <PropertyContainer currentComponent={currentComponent} />
    )
  }
}

