import React  from 'react';
import { ModuleType } from '../const/';
import ModuleText from './ModuleText/';

export default function (component) {
  if (component.componentName === ModuleType.Text) {
    return (<ModuleText
      component={component}
      store={component.props.store}
      previewInApp={true}/>);
  }
  return null;
}