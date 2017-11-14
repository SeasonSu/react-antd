 import React from 'react';
 import classnames from 'classnames'
 import './style/Header.less'
 import { Menu, Icon } from 'antd'
 const SubMenu = Menu.SubMenu

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    handleClickMenu = () => {
        console.log('1')
    }
    render() {
        return (
            <div className="header">
               <div className="button">
                  <Icon type={classnames({ 'menu-unfold': this.props.siderFold, 'menu-fold': !this.props.siderFold })} />
                </div>
              <div className="rightWarpper">
                <div className="button">
                  <Icon type="mail" />
                </div>
                <Menu mode="horizontal" onClick={() => this.handleClickMenu()}>
                  <SubMenu  style={{float: 'right'}} title={<span><Icon type="user"/>123</span>}>
                    <Menu.Item key="logout">
                      Sign out
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </div>
        )
    }
}

Header.defaultProps = {
};

export default Header;
