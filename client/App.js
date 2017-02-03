import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link ,browserHistory} from 'react-router'

import Page from './component/page/page';
import './assets/css/styles.less'
import './App.less';
import configureStore from './store/configureStore';


const store = configureStore({},'APP');

const rootEl = document.getElementById('app');

ReactDOM.render(<Page store={store}/> ,rootEl);