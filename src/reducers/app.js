import * as types from '../actions/app';
import {findIndex} from 'lodash';

const initialState = [];

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.ADD_COMPONENT:
      return [...state, action.component];
    
    case types.SHOW_PROPERTY:
      return state.map(component => {
          component.showProperty = (component.id === action.componentInfo.id);
        return component;
      })
    case types.CHANGE_PROPERTY:
      return state.map(component=>{
        if(component.id === action.property.componentId){
           component.properties = component.properties.map(property=>{
            property.id === action.property.id && (property.value = action.property.value);
            return property;
          })
        }
        return component;
      })
      
    default:
      return state;
  }
}
