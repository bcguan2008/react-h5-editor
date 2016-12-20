import * as types from '../actions/components';
import {findIndex} from 'lodash';
import update from 'react/lib/update';

const initialState = [];

export default function components(state = initialState, action) {
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
    case types.MOVE_COMPONENT:
      const {components} = state;
      const dragComponent = state[action.source];
      return update(state,{
          $splice: [
            [action.source, 1],
            [action.target, 0, dragComponent]
          ]
      })
    default:
      return state;
  }
}
