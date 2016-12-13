import * as types from '../actions/app';
import {findIndex} from 'lodash';

const initialState = [];

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.ADD_COMPONENT:
      return [...state, action.component];
    
    case types.SHOW_PROPERTY:
      return state.map(component => {
        if(component.id === action.componentInfo.id){
          component.showProperty = true ;
        }
        else{
          component.showProperty = false;
        }
        return component;
      })
    default:
      return state;
  }
}
