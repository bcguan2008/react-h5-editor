import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  render() {
    const {id, property} = this.props;
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