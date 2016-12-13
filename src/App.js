import React from 'react';
import ReactDOM from 'react-dom';
import Page from './component/page/page';
import './assets/css/styles.less'
import './App.less';


const rootEl = document.getElementById('app');

ReactDOM.render(<Page />, rootEl);