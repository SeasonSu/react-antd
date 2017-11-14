import React from 'react';
import {Menu,Icon} from 'antd';
import { Link } from 'react-router-dom'

class MenuComponent extends React.Component {
    constructor(pros){
        super(pros)
    }
 render() {
   return (
      <div className='Menu'>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/">
                    <Icon type="user" />
                    <span>home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/404">
                    <Icon type="user" />
                    <span>404</span>
                  </Link>
                </Menu.Item>
            </Menu>
      </div>
   )
 }
}

MenuComponent.defaultProps = {
};

export default MenuComponent;
