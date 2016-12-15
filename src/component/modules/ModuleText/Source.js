import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  createMarkup(property) {
    return {__html: property.text};
  }

  render() {
    let {id, property} = this.props;

    return (
      <div className="text">
        <div id={id} className="ph-empty dashed" dangerouslySetInnerHTML={this.createMarkup(property)} >
        </div>
      </div>
    )
  }
}

export default Source;