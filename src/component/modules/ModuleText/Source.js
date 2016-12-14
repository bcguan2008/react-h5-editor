import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  render() {
    let {id, property} = this.props;
    
    console.log('./module/moduleText/source',this.props)

    return (
      <div className="text">
        <div id={id} className="ph-empty dashed">
          {property.text}
        </div>
      </div>
    )
  }
}

export default Source;