
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

/** demo Knight

import Board from './components/Board';
import { observe } from './components/Game';

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);
 */

/**
import Card from './card';
ReactDOM.render(<Card text='Write the docs' />,rootEl);
 */

/**
import SortableCancelOnDropOutside from './sortable/index';
ReactDOM.render(<SortableCancelOnDropOutside />,rootEl);
 */


import Naive from './Naive/index';
ReactDOM.render(<Naive />, rootEl);