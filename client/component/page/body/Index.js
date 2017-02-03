import React, {Component} from 'react';
import Container from './Container';
import Properties from './Property/';
import ToolBar from './ToolBar/Index';

class Body extends Component {
  constructor() {
    super()
  }

  render() {
    const {store,components,app} = this.props;
    return (
      <div className="container">
        <ToolBar store={store} app={app}/>

        <div className="render-container">
          <Container 
            store={store}
            x={0}
            y={0}
            components= {components}
            canDrop={true}
            isOver={false}
            app={app}
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

export default Body;