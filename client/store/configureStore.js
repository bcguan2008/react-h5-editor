import {createStore} from 'redux';
import rootReducer from '../reducers';

let cache = {};

export default function configureStore(initialState,appKey) {
  if(!appKey){
    throw 'please input appKey on configureStore';
  }

  if(cache[appKey]){
    return cache[appKey];
  }  
  return (cache[appKey] = createStore(rootReducer, initialState));
}
