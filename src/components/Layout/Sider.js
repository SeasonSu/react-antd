import React from 'react'
import Menu from './Menu'

class SiderComp extends React.Component {

  render() {
    return (
    <div>
        <div className="logo">
            <img alt={'logo'} src="/logo.png" />
            {this.props.siderFold ? '' : <span>ANTD ADMIN</span>}
        </div>
        <Menu  />
        {!this.props.siderFold ? <div className="switchtheme"></div> : ''}
    </div>
    );
  }
}

SiderComp.defaultProps = {
};

export default SiderComp;
