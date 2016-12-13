import React, {Component, PropTypes} from 'react';

class ModuleText extends Component {
  constructor() {
    super()
  }

  render() {
    let {id, text} = this.props;
    if (!text) {
      text = '测试文本框';
    }
    return (
      <div className="text">
        <div id={id} className="ph-empty dashed">
          {text}
        </div>
      </div>
    )
  }
}

export default ModuleText;