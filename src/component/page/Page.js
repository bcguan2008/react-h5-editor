import React, {Component} from 'react';
import Header from './header/';
import Body from './body/'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import configureStore from '../../store/configureStore';
const store = configureStore({});

class Page extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Body store={store}/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Page);