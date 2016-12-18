import React, {Component} from 'react';
import {compose} from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';

import * as appActions from '../../actions/app'
import Header from './header/';
import Body from './body/'


class Page extends Component {
  constructor() {
    super();
  }

  render() {
    const {store,components} = this.props;
    return (
      <div>
        <Header store={store} components={components}/>
        <Body store={store} components={components}/>
      </div>
    )
  }
}

export default compose(
  connect(state => ({
    components: state.app
  }),
    appActions
  ),
  DragDropContext(HTML5Backend)
)(Page);