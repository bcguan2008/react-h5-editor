export default [
  {
    categoryName:'常规',
    categoryId:1,
    categoryConfig : [
       {
        componentKey: 'Text',
        componentName: 'ModuleText',
        displayName: '文本',
        properties: [
          {
            id: 1,
            propertyName: '文本',
            propertyType: 'input',
            value: '测试文本框',
            propKey: 'text'
          }
        ],
        source:`import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  createMarkup(property) {
    return {__html: property.text};
  }

  render() {
    let {id, property} = this.props;

    return (
      <div className="text">
        <div id={id} className="ph-empty dashed" dangerouslySetInnerHTML={this.createMarkup(property)} >
        </div>
      </div>
    )
  }
}

export default Source;`
      },
      {
        componentKey: 'Image',
        componentName: 'ModuleImage',
        displayName: '图片设置',
        properties: [
          {
            id: 1,
            propertyName: '图片地址',
            propertyType: 'input',
            //value: 'http://h5.ffan.com/zzq/h5/parkingCoupon/JYBS1xiaoshi/images/banner-offline.jpg',
            value:'http://www.ffan.com/new/images/about/banner.jpg',
            propKey: 'src'
          },
          {
            id: 2,
            propertyName: '点击跳转',
            propertyType: 'input',
            value: 'http://www.ffan.com/',
            propKey: 'href'
          }
        ],
        source :`import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  render() {
    const {id, property} = this.props;
    let src = property.src,
        href = property.href;
    return (
      <div className="image">
        <img id={id} src={src} href={href} />
      </div>
    )
  }
}

export default Source;`
      }
    ],
  }
];