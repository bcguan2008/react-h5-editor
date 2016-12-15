import * as appActions from '../../actions/app';
import { findDOMNode } from 'react-dom';
import { cloneDeep } from 'lodash';
import configureStore from '../../store/configureStore';

const store = configureStore({},'APP');

function newComponent(config,index){
  return {
      id: Math.random().toString(28).substr(2),
      componentName: config.componentName,
      displayName:config.displayName,
      properties:cloneDeep(config.properties),
      index:index
    }
}

/**
 * 在容器里面的，拖拽就不会再产生一个component
 */
function canNewComponent(component){
  return !(findDOMNode(component)
      && findDOMNode(component).parentNode
      && findDOMNode(component).parentNode.getAttribute('class') === 'body');
}

function beginDrag(config) {
  return function (props, monitor, component) {
    /**
     * 在ToolBar 的控件，beginDrag会重新生成id.
     * 在body 里的控件，beginDrag 会直接返回属性（调节顺序的时候用）
     */
    if(canNewComponent(component)){
      return newComponent(config,props.index);
    }
    else{
      props.component.index = props.index;
      return props.component;
    }
  } 
}

function endDrag() {
  return function (props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    if (canNewComponent(component)) {
      /**
       * item 是beginDrag里返回的对象
       */
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      store.dispatch(appActions.AddComponent(item));
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

function hover(){
  return function(props, monitor, component){
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    
    if(typeof dragIndex ==='undefined' || typeof hoverIndex ==='undefined'){
      return ;
    }

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    console.log('dispatch',[dragIndex,hoverIndex])
    // Time to actually perform the action
    store.dispatch(appActions.MoveComponent(dragIndex,hoverIndex));
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
}

export {
  beginDrag,
  endDrag,
  collectSource,
  newComponent,
  hover
}