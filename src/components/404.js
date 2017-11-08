require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import { DatePicker, message } from 'antd';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div className="index">
        页面不存在404
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
        </div>
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;