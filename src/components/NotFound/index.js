import React from 'react';
import { Card } from 'antd';
import './index.scss';
import PropTypes from 'prop-types'
class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="notFound">
        <Card>
            <div className="title">404</div>
            Sorry,您访问的页面不存在
        </Card>
      </div>
    )
  }
}

NotFound.contextTypes = {
    ShowLoader: PropTypes.string,
    store: PropTypes.object,
    value: PropTypes.string
};


export default NotFound;
