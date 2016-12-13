import React,{Component} from 'react';
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const boxSource = {
  beginDrag(props){
    return {
      id:props.id
    }
  },
  endDrag(props,monitor){

  }
}

const boxTarget={
  canDrop(){

  }
}

@DropTarget(ItemTypes.BOX, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

export default class Box extends Component {
  constructor(props){
    super(props)
    this.props = props;
  }

  render(){
    const { text,connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <div style={{...style}} id={this.props.id} >
        {this.props.text}
      </div>
    ))
  }
}

