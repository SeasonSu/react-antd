import React from 'react';
import { Card } from 'antd';
import './index.scss';
import PropTypes from 'prop-types'
class NotFound extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  //
  // componentDidMount() {
  //   const { store } = this.context;
  //   console.log('````')
  //   console.log(store)
  //   console.log(this.props)
  // }
  componentDidMount(){
        this.setState({
            showLoader:'true'
        })
　　　//   this.props.handlerNotFound('aa');
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

NotFound.ContextType = {
    showLoader:PropTypes.string
}

// NotFound.defaultProps = {
// };

export default NotFound;
