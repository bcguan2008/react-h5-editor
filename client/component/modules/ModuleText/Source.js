import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  combineProperties(properties){
    let property = {};
    properties.forEach(p=>{
      return property[p.propKey] = p.value;
    })

    return property;
  }

  createMarkup(property) {
    return {__html: property.text};
  }

  render() {
    let {id, properties} = this.props;

    let property = this.combineProperties(properties);

    return (
      <div className="text">
        <div id={id} className="ph-empty dashed" dangerouslySetInnerHTML={this.createMarkup(property)} >
        </div>
      </div>
    )
  }
}

export default Source;