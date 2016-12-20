import * as types from '../actions/app';

const initialState = {
  title:'网页标题'
};

export default function app(state = initialState,action){
  switch (action.type) {
    case types.CHANGE_TITLE:
      return Object.assign({},state,{
        title:action.title
      })
    default:
      return state;
  }

}