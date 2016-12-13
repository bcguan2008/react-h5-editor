import React, {Component} from 'react';
import Container from './Container';
import Properties from './PropertyContainer';
import ModuleText from '../../modules/ModuleText/';

import { connect } from 'react-redux';
import * as appActions from '../../../actions/app'

class Body extends Component {
  constructor() {
    super()
  }

  render() {
    const {store,components} = this.props;
    console.log('page/body/index',components)
    return (
      <div className="container">
        <div className="module-box">
          <div className="modules">
            <div className="title">测试</div>
            <ul className="items">
              <div className="el-tooltip" >
                <div className="el-tooltip__rel">
                    <ModuleText store={store}/>
                </div>
              </div>
            </ul>
          </div>
        </div>

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