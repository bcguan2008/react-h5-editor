import React, {Component} from 'react';
import Http from 'axios';
import * as appActions from '../../../actions/app';
import configureStore from '../../../store/configureStore';

const store = configureStore({}, 'APP');


export default class Header extends Component {
  constructor() {
    super()
  }

  save() {
    store.dispatch(appActions.changeLoading(true));
    return Http.post('/create', {
      tranId: 1,
      title: this.props.app.title,
      components: this.props.components
    }).then(() => {
      store.dispatch(appActions.changeLoading(false));
      window.location.href = '/publish/1/index.html';
    });
  }

  render() {
    const {components, app } = this.props;

    return (
      <header>
        <div className="title">foo</div>
        <div>

          <button type="button" onClick={this.save.bind(this) } className="el-button el-button--success">
            <i className="el-icon-check"></i><span>预览</span></button>
        </div>
      </header>
    )
  }
}
