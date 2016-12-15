import React, { Component, PropTypes} from 'react';
import ModuleText from '../../../modules/ModuleText/';
import {newComponent} from '../../../modules/CommonDnd';
import RenderModule from '../../../modules/RenderModule';

export default class ToolBar extends Component {
  constructor() {
    super()
  }

  render() {
    const {module }  = this.props;
    let components = module.categoryConfig.map((config)=>{
      let component = newComponent(config);
      return RenderModule(component,false);
    })
    return (
      <div className="modules">
        <div className="title">{module.categoryName}</div>
        <ul className="items">
          <div className="el-tooltip" >
            <div className="el-tooltip__rel">
              {components}
            </div>
          </div>
        </ul>
      </div>
    )
  }
}