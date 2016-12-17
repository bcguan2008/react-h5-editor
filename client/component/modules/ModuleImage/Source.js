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

  render() {
    const {id, properties} = this.props;

    let property = this.combineProperties(properties);

    let src = property.src,
        href = property.href;
    return (
      <div className="image">
        <img id={id} src={src} href={href} />
      </div>
    )
  }
}

export default Source;