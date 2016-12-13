import React, { Component, PropTypes } from 'react';

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
     * 输出dom
     */
    let dom = (()=>{

      if(currentComponent){
        return (
          <div>
            <h2>{currentComponent.displayName}属性设置</h2>
            <div className="contents">
              <div className="editor-container">
                <div className="form">
                  <div className="form-item">
                    <label className="form-item__label">
                        文本
                    </label>
                    <div className="form-item__content">
                      <div class="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="form-footer">
                    <button type="button" className="el-button el-button--success">
                      <i className="el-icon-check"></i><span>保存</span>
                    </button>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          
        )
      }
      else{
        return (<div><h2>文本</h2></div>)
      }
    })()

    return (
      dom
    )
  }
}

