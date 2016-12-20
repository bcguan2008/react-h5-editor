import React, { Component, PropTypes } from 'react';

import * as appComponents from '../../../../actions/components';
import configureStore from '../../../../store/configureStore';

const store = configureStore({},'APP');

export default class PropertyInput extends Component {
  constructor() {
    super()
    /*
    this.updateInputValue = debounce((event)=>{
      let property = {
        componentId:this.props.componentId,
        id:this.props.property.id,
        value:event.target.value
      }

      store.dispatch(appComponents.ChangeProperty(property));

    },300); */
  }


  onChange(event){
    /**
     * https://github.com/facebook/react/issues/2857
     *  
    event.persist();
    this.updateInputValue(event);
    */
    let property = {
      componentId:this.props.componentId,
      id:this.props.property.id,
      value:event.target.value
    }
    store.dispatch(appComponents.ChangeProperty(property));
  }

  render() {
    const {property} = this.props;
    return (
      <div className="form-item">
        <label className="form-item__label">
          {property.propertyName}
        </label>
        <div className="form-item__content">
          <div className="input">
            <input type="text" value={property.value} onChange={this.onChange.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }

}