import ReactDOM from 'react-dom';
import React, {Component} from 'react';

<%= ImportModules %>

export class Page extends Component {
  constructor() {
    super()
  }

  render() {
    return (<div>
    <%= Modules %>
    </div>)
  }
}

const rootEl = document.getElementById('app');

ReactDOM.render(<Page /> ,rootEl);

