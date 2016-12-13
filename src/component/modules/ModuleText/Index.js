import React, {Component, PropTypes} from 'react';
import { ModuleType } from '../../const/';
import { DragSource, DropTarget } from 'react-dnd';
import * as CommonDnd from '../CommonDnd';
import Source from './Source';
import * as Config from './Config';
import classNames from 'classnames';

import * as appActions from '../../../actions/app';

const moduleTextSource = {
  beginDrag: CommonDnd.beginDrag(Config),
  endDrag: CommonDnd.endDrag()
};

const moduleTextTarget = {
  hover(props, monitor, component) {
  }
}

function collectTarget(connect) {
  return { connectDropTarget: connect.dropTarget() }
}

class ModuleText extends Component {
  constructor() {
    super()
  }

  moduleClick() {
    this.props.store.dispatch(appActions.ShowProperty(this.props.component));
  }

  render() {
    const { connectDragSource, isDragging, connectDropTarget, previewInApp, component} = this.props;
    const styles = classNames({
      'active': component && component.showProperty
    });
    /**
     * app 里和 组件库的display 不一样
     */
    let dom = (() => {
      if (previewInApp) {
        return (
          <div className={styles} onMouseDown={this.moduleClick.bind(this) } >
            <Source
              id={component.id}
              property = {component.property}
              />
          </div>)
      } else {
        return (
          <li className="item">
            <i className="el-icon-edit"></i> 文本
          </li>)
      }
    })()

    return connectDragSource(connectDropTarget(dom, { dropEffect: 'copy' }))
  }
}

ModuleText.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default
  DropTarget(ModuleType[Config.componentKey], moduleTextTarget, collectTarget)
    (DragSource(ModuleType[Config.componentKey], moduleTextSource, CommonDnd.collectSource())(ModuleText))