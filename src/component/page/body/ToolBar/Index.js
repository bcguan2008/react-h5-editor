import React, { Component, PropTypes} from 'react';
import Modules from './Modules'; 
import ModuleConfig from '../../../../ModuleConfig';


export default class ToolBar extends Component {
  constructor() {
    super()
  }

  render() {
    const {store }  = this.props;
    const modules =  ModuleConfig.map((module)=>{
      return <Modules key={module.categoryId} module={module}/> 
    });
    return (
      <div className="module-box">
        {modules}
      </div>
    )
  }
}