const ADD_COMPONENT = 'ADD_COMPONENT'
const SHOW_PROPERTY = 'SHOW_PROPERTY'
const CHANGE_PROPERTY = 'CHANGE_PROPERTY';
const MOVE_COMPONENT = 'MOVE_COMPONENT';

function AddComponent(component){
  return {
    type:ADD_COMPONENT,
    component:component
  }
}

function ShowProperty(componentInfo){
  return {
    type:SHOW_PROPERTY,
    componentInfo:componentInfo
  }
}

function ChangeProperty(property){
  return {
    type:CHANGE_PROPERTY,
    property:property
  }
}

function MoveComponent(source,target){
  return {
    type:MOVE_COMPONENT,
    source:source,
    target:target
  }
}

export {
  ADD_COMPONENT,
  SHOW_PROPERTY,
  CHANGE_PROPERTY,
  MOVE_COMPONENT,
  AddComponent,
  ShowProperty,
  ChangeProperty,
  MoveComponent
}
