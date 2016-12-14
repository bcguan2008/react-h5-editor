export default [
  {
    categoryName:'常规',
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
        ]
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
            value: 'http://h5.ffan.com/zzq/h5/parkingCoupon/JYBS1xiaoshi/images/banner-offline.jpg',
            propKey: 'src'
          },
          {
            id: 2,
            propertyName: '点击跳转',
            propertyType: 'input',
            value: 'http://www.ffan.com/',
            propKey: 'href'
          }
        ]
      }
    ]
  }
];