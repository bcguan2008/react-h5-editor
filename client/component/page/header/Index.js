import React,{Component} from 'react';

export default class Header extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <header>
        <div className="title">foo</div>
        <div>
          <button type="button" className="el-button el-button--primary">
          <i className="el-icon-document"></i><span>预览</span></button> 
          <button type="button" className="el-button el-button--success">
          <i className="el-icon-check"></i><span>保存</span></button>
          </div>
      </header>
    )
  }
}
