import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';
import { DragSource } from 'react-dnd';
import { ModuleType } from '../../const';
import { DropTarget } from 'react-dnd';
import {AppDragKey} from '../../const/'
import RenderModule from '../../modules/RenderModule';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Container extends Component {
  constructor() {
    super()
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop, components } = this.props;
    const styles = classNames({
      'body': true,
      'active': isOver
    });
    /**
     * 根据传入json，生成组件渲染
     */
    let dynamicComponents
    if(components && components.length){
      dynamicComponents = components.map((component,index)=>{
        return RenderModule(component,true,index)
      })
    }

    return connectDropTarget(
      <div className={styles} style={{ position: 'relative' }}>
        <input type="text" className="page-title animated" />
        { dynamicComponents }
      </div>
    )
  }
}

Container.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
};

export default DropTarget(AppDragKey, {}, collect)(Container);
