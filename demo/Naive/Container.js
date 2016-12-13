import React,{Component} from 'react';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import Box from './Box';
const style = {
  width: 400
};

const boxTarget = {
  drop() {
  }
};

var collect = function(connect,monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}


@DragDropContext(HTML5Backend)
@DropTarget(ItemTypes.BOX, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxs:[{
        id:'1001',
        text:'this is 1001 box'
      },
      {
        id:'1002',
        text:'this is 1002 box'
      }]
  }}
  
  render(){
    const { connectDropTarget } = this.props;
    const {boxs} = this.state;
    return (
      connectDropTarget(
        <div style={style}>
          {boxs.map(box=>{
            return (
              <Box key={box.id}
                  id={box.id}
                  text={box.text}
                  />)
          })}
        </div> 
      )
    )
  }
}


//export default DragDropContext(HTML5Backend)(DropTarget(ItemTypes.BOX,boxTarget,collect)(Container));  