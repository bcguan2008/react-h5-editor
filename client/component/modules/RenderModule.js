import React  from 'react';
import { ModuleType } from '../const/';
import ModuleText from './ModuleText/';
import ModuleImage from './ModuleImage/'

export default function (component,previewInApp,index) {
  switch(component.componentName){
    case ModuleType.Text :
      return (<ModuleText
        index={index}
        key={component.id}
        component={component}
        previewInApp={previewInApp}/>);
    case ModuleType.Image:
      return (<ModuleImage
        index={index}
        key={component.id}
        component={component}
        previewInApp={previewInApp}/>);
  }
  return null;
}