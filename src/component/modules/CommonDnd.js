import * as appActions from '../../actions/app';
import { findDOMNode } from 'react-dom';

function beginDrag(config) {
  return function (props, monitor, component) {
    return {
      id: Math.random().toString(28).substr(2),
      componentName: config.componentName,
      displayName:config.displayName,
      property:config.property,
      props: props
    }
  }
}

function endDrag() {
  return function (props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    /**
     * 在容器里面的，拖拽就不会再产生一个component
     */
    const canNotAdd =
      findDOMNode(component)
      && findDOMNode(component).parentNode
      && findDOMNode(component).parentNode.getAttribute('class') === 'body';

    if (!canNotAdd) {
      /**
       * item 是beginDrag里返回的对象
       */
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      props.store.dispatch(appActions.AddComponent(item));
    }

  }
}

function collectSource() {
  return function (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  }
}

export {
  beginDrag,
  endDrag,
  collectSource
}