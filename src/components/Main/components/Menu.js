import React from 'react';
import {Menu,Icon} from 'antd'
import MenuList from './MenuConf'
var _props = null
class MenuComponent extends React.Component {
    constructor(props){
        super(props)
        _props = this.props
    }
    handleClick({key}){
        var _link = ''
        const checkLink = (menusArray) => {
            menusArray.map((item) => {
                if(item.subMenu){
                    checkLink(item.subMenu)
                }else{
                    if(item.key == key){
                        _link = item.to
                    }
                }
            })
        }
        checkLink(MenuList)
        if(_link == _props.history.location.pathname){
            return
        }
        _props.history.push(_link)
    }
    render() {
        // 默认展开，默认选择菜单
        var defaultMenu = ['1']
        var defaultOpen = ['0']
        var tempOpen = []
        const getMenusDom = (MenusArray,MenusKey) => (
            MenusArray.map((item,index) => {
                item.key = MenusKey ? MenusKey + index.toString() : index.toString()
                if(item.subMenu){
                    tempOpen.push(item.key)
                    return (
                        <Menu.SubMenu
                            title={
                                <span>
                                    <Icon type={item.icon}/>
                                    <span>{(!this.props.isMenuFold || MenusKey) && item.name}</span>
                                </span>
                            }
                            key={item.key}
                        >
                            {getMenusDom(item.subMenu,item.key)}
                        </Menu.SubMenu>
                    )
                }else{
                    if(item.to == this.props.history.location.pathname){
                        defaultMenu = [`${item.key}`]
                        defaultOpen = MenusKey ? tempOpen : ['0']
                    }
                    return (
                        <Menu.Item key={item.key} >
                            <Icon type={item.icon} />
                            <span>{(!this.props.isMenuFold || MenusKey) && item.name}</span>
                        </Menu.Item>
                    )
                }
            })
        )
        const MenusEle = getMenusDom(MenuList)
        return (
            <div className='Menu'>
                <Menu
                    theme="light"
                    mode={this.props.isMenuFold ? 'vertical' : 'inline'}
                    props={this.props}
                    defaultSelectedKeys={defaultMenu}
                    defaultOpenKeys={defaultOpen}
                    onClick={this.handleClick}
                >
                    {MenusEle}
                </Menu>
            </div>
        )
    }
}

MenuComponent.defaultProps = {
};

export default MenuComponent;
