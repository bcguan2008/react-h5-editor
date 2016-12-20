import React, {Component, PropTypes} from 'react';
import { ModuleType ,AppDragKey} from '../../const/';
import { DragSource, DropTarget } from 'react-dnd';
import * as CommonDnd from '../CommonDnd';
import Source from './Source';
import Config from './Config';
import classNames from 'classnames';
import configureStore from '../../../store/configureStore';
import * as appComponents from '../../../actions/components';
const store = configureStore({},'APP');

const moduleSource = {
  beginDrag: CommonDnd.beginDrag(Config),
  endDrag: CommonDnd.endDrag()
};

const moduleTarget = {
  hover:CommonDnd.hover()
}

function collectTarget(connect) {
  return { connectDropTarget: connect.dropTarget() }
}

class Module extends Component {
  constructor() {
    super()
  }

  moduleClick() {
    store.dispatch(appComponents.ShowProperty(this.props.component));
  }

  combineProperties(properties){
    let property = {};
    properties.forEach(p=>{
      return property[p.propKey] = p.value;
    })
    return property;
  }

  render() {
    const { connectDragSource, isDragging, connectDropTarget, previewInApp, component} = this.props;
    const styles = classNames({
      'active': component && component.showProperty
    });
    /**
     * app 里和 组件库的display 不一样
     */
    let dom = (($this,displayName) => {
      if (previewInApp) {
        let property = $this.combineProperties(component.properties);
        return (
          <div className={styles} onMouseDown={this.moduleClick.bind(this) } >
            <Source
              id={component.id}
              property = {property}
              />
          </div>)
      } else {
        return (
          <li className="item">
            <i className="el-icon-edit"></i> {displayName}
          </li>)
      }
    })(this,Config.displayName)

    return connectDragSource(connectDropTarget(dom, { dropEffect: 'copy' }))
  }
}

Module.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default
  DropTarget(AppDragKey, moduleTarget, collectTarget)
    (DragSource(AppDragKey, moduleSource, CommonDnd.collectSource())(Module))