const ADD_COMPONENT = 'ADD_COMPONENT'

const SHOW_PROPERTY = 'SHOW_PROPERTY'

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


export {
  ADD_COMPONENT,
  SHOW_PROPERTY,
  AddComponent,
  ShowProperty
}




