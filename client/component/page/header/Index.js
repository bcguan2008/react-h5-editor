import React, {Component} from 'react';
import Http from 'axios';

export default class Header extends Component {
  constructor() {
    super()
  }

  save(){
    return Http.post('/create',{
      title:this.props.app.title,
      components:this.props.components
    });
  }

  render() {
    const {components,app } = this.props;

    return (
      <header>
        <div className="title">foo</div>
        <div>
          <button type="button" className="el-button el-button--primary" disabled>
            <i className="el-icon-document"></i><span>预览</span></button>

          <button type="button" onClick={this.save.bind(this)} className="el-button el-button--success">
            <i className="el-icon-check"></i><span>保存</span></button>
        </div>
      </header>
    )
  }
}
