import React, { Component, PropTypes } from 'react';

import PropertyFactory from './PropertyFactory';

export default class PropertyContainer extends Component {
  constructor() {
    super()
  }

  render() {
    const {currentComponent} = this.props;
    /**
     * 没有选中要编辑的Component
     */
    if (!currentComponent) {
      return (<div><h2>文本</h2></div>)
    }

    let propertyItems;
    if(currentComponent && currentComponent.properties && currentComponent.properties.length>0){
      propertyItems = currentComponent.properties.map((property)=>{
        return PropertyFactory(currentComponent.id,property);
      })
    }

    console.log('/page/body/property/propertyContainer',currentComponent)
    return (
      <div>
        <h2>{currentComponent.displayName}属性设置</h2>
        <div className="contents">
          <div className="editor-container">
            <div className="form">
              {propertyItems}
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

