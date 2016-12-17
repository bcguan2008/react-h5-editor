import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link ,browserHistory} from 'react-router'

import Page from './component/page/page';
import './assets/css/styles.less'
import './App.less';

function withExampleBasename(history, dirname) {
  return useBasename(() => history)({ basename: `/${dirname}` })
}

const rootEl = document.getElementById('app');

ReactDOM.render((
  <Router 
    history={browserHistory}>
    <Route path="/" component={Page}>
    </Route>
  </Router>
), rootEl)