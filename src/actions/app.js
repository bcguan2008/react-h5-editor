const ADD_COMPONENT = 'ADD_COMPONENT'
const SHOW_PROPERTY = 'SHOW_PROPERTY'
const CHANGE_PROPERTY = 'CHANGE_PROPERTY';

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

export {
  ADD_COMPONENT,
  SHOW_PROPERTY,
  CHANGE_PROPERTY,
  AddComponent,
  ShowProperty,
  ChangeProperty
}
