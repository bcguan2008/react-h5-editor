import _ from 'lodash';

import moduleConfigs   from '../client/ModuleConfig'

let paths = {
  componentPath:'./client/component/modules/'
}


let dests= (()=>{
  let destFolder = [];

  moduleConfigs.forEach((config)=>{
    config.categoryConfig.forEach(component=>{
      let componentPath = paths.componentPath + component.componentName;

      let moduleConfig = _.transform(component,function(result,value,key){
        if(key !== 'source'){
          result[key] = value;
        }
      });

      destFolder.push({
        componentPath:componentPath,
        Config:`export default ${JSON.stringify(moduleConfig)}`,
        Source:component.source
      });
    })
  });
  return destFolder;
})()

export {
  dests,
}