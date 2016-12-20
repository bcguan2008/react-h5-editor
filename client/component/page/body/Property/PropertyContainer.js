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

    return (
      /**
       * <div className="footer">
          <button type="button" className="el-button el-button--success" onClick={this.saveProperty}>
            <i className="el-icon-check"></i>
            <span>应用</span>
          </button>
        </div>
       */
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

