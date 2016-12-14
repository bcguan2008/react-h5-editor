import React, {Component, PropTypes} from 'react';

class Source extends Component {
  constructor() {
    super()
  }

  render() {
    let {id, src,href} = this.props;
    
    return (
      <div className="image">
        <img id={} src={src} href={href} />
      </div>
    )
  }
}

export default Source;