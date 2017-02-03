import React, {Component} from 'react';
import {compose} from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { connect } from 'react-redux';

import componentsActions from '../../actions/components';
import appActions from '../../actions/app';
import Header from './header/';
import Body from './body/'
import { Spin } from 'antd';

class Page extends Component {
  constructor() {
    super();
  }

  render() {
    const {store,components,app} = this.props;
    return (
      <Spin tip="Loading" spinning={!!app.loading}> 
        <div>
          <Header store={store} components={components} app={app}/>
          <Body store={store} components={components} app={app}/>
        </div>
      </Spin>
    )
  }
}

export default compose(
  connect(state => ({
    app:state.app,
    components: state.components
  }),
    appActions,
    componentsActions
  ),
  DragDropContext(HTML5Backend)
)(Page);