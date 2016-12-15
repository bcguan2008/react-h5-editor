import React  from 'react';
import { ModuleType } from '../const/'
import ModuleTextProperty from './ModuleText/Property'; 

export default function(moduleType){
  if(moduleType === ModuleType.Text){
    return (<ModuleTextProperty />)
  }
}