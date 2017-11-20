import React from 'react';
import classnames from 'classnames'
import './style/Header.less'
import { Menu, Icon ,Popover} from 'antd'
import {config,session} from '../../utils'
import MenuComp from './Menu'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            siderFold:false
        }
    }
    handleClickMenu = () => {
        session.remove(config.sessionKey.userInfo)
        this.props.history.push('./login')
    }
    handleMenu = () => {
        this.setState({
            siderFold:!this.state.siderFold
        })
        this.props.handlerMenuFold(this.state.siderFold)
    }
    render() {
        return (
            <div className="header">
                {   this.props.isNavbar ?
                    (
                        <Popover placement="bottomLeft" overlayClassName="popovermenu" trigger="click"  content={<MenuComp {...this.props}/>}>
                          <div className="button">
                            <Icon type="bars" />
                          </div>
                        </Popover>
                    ):(
                        <div className="button" onClick={()=>this.handleMenu()}>
                            <Icon type={classnames({'menu-unfold':this.state.siderFold,'menu-fold':!this.state.siderFold })} />
                        </div>
                    )
                }
                <div className="rightWarpper">
                    <div className="button">
                        <Icon type="mail" />
                    </div>
                    <Menu mode="horizontal" onClick={() => this.handleClickMenu()}>
                        <Menu.SubMenu  style={{float: 'right'}} title={<span><Icon type="user"/>nandu</span>}>
                            <Menu.Item key="logout">
                                退出登陆
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}

Header.defaultProps = {
};

export default Header;
