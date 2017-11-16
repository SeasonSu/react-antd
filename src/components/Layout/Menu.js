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
        MenuList.map((item)=>{
            if(item.subMenu){
                item.subMenu.map((subItem) => {
                    if(subItem.key == key){
                        _link = subItem.to
                    }
                })
            }else{
                if(item.key == key){
                    _link = item.to
                }
            }
        })
        if(_link == _props.history.location.pathname){
            return
        }
        _props.history.push(_link)
    }
    render() {
        // 默认展开，默认选择菜单
        let defaultMenu = ['1']
        let defaultOpen = ['0']
        const Menus = MenuList.map((item,index) => {
            item.key = index.toString()
            if(!item.subMenu){
                if(item.to == this.props.history.location.pathname){
                    defaultMenu = [`${index}`]
                }
                return (
                    <Menu.Item key={index} >
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </Menu.Item>
                )
            }else{
                const subMenus = item.subMenu.map((subItem,subIndex) => {
                    subItem.key = subIndex = index.toString() + subIndex
                    if(subItem.to == this.props.history.location.pathname){
                        defaultMenu = [`${subIndex}`]
                        defaultOpen = [`${index}`]
                    }
                    return (
                        <Menu.Item key={subIndex} >
                            <Icon type={subItem.icon} />
                            <span>{subItem.name}</span>
                       </Menu.Item>
                    )
                })
                return (
                    <Menu.SubMenu title={item.title} key={index}>
                        {subMenus}
                     </Menu.SubMenu>
                )
            }
        })
        return (
            <div className='Menu'>
                <Menu
                    inlineCollapsed={this.props.isMenuFold}
                    theme="light"
                    mode={this.props.isMenuFold ? 'vertical' : 'inline'}
                    props={this.props}
                    defaultSelectedKeys={defaultMenu}
                    defaultOpenKeys={defaultOpen}
                    onClick={this.handleClick}
                >
                    {Menus}
                </Menu>
            </div>
        )
    }
}

MenuComponent.defaultProps = {
};

export default MenuComponent;
