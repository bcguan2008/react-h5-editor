import ModuleText from '../client/component/modules/ModuleText/source';
import ModuleImage from '../client/component/modules/ModuleImage/source';


import React, {Component} from 'react';

export class Page extends Component {
  constructor(){
    super()
  } 

  render(){
    return (<div>
      <ModuleImage id={"pmlqeqp05d15r6fcp11hjfbml"}
        properties = {{ "id": 1, "propertyName": "图片地址", "propertyType": "input", "value": "http://www.ffan.com/new/images/about/banner.jpg", "propKey": "src" }, { "id": 2, "propertyName": "点击跳转", "propertyType": "input", "value": "http://www.ffan.com/", "propKey": "href" }}
      />

      <ModuleText id={"h7n6lphq18cp5a96jejhilrfl"}
        properties= {{ "id": 1, "propertyName": "文本", "propertyType": "input", "value": "测试文本框", "propKey": "text" }}
        />

      <ModuleText id="cp05mp8fp6dn63no1m6gabjj7"
        properties={{ "id": 1, "propertyName": "文本", "propertyType": "input", "value": "测试文本框", "propKey": "text" }} />

    </div>)
  }
}