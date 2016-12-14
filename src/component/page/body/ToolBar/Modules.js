import React, { Component, PropTypes} from 'react';
import ModuleText from '../../../modules/ModuleText/';

export default class ToolBar extends Component {
  constructor() {
    super()
  }

  render() {
    const {store }  = this.props;
    return (
    <div className="module-box">
      <div className="modules">
        <div className="title">测试</div>
        <ul className="items">
          <div className="el-tooltip" >
            <div className="el-tooltip__rel">
              <ModuleText store={store}/>
            </div>
          </div>
        </ul>

      </div>
    </div>
    )
  }
}