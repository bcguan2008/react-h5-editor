import React, {Component} from 'react';
import Container from './Container';
import Properties from './Property/';

import ToolBar from './ToolBar/Index';

import { connect } from 'react-redux';
import * as appActions from '../../../actions/app'

class Body extends Component {
  constructor() {
    super()
  }

  render() {
    const {store,components} = this.props;
    return (
      <div className="container">
        <ToolBar store={store}/>

        <div className="render-container">
          <Container 
            store={store}
            x={0}
            y={0}
            components= {components}
            canDrop={true}
            isOver={false}
            />
        </div>
        <div className="properties">
          <Properties 
            store={store}
            components={components}/> 
        </div>
      </div>
    )
  }
}

export default connect(state => ({
    components: state.app
  }),
    appActions
  )(Body);