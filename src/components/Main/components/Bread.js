import React from 'react'
import {Breadcrumb , Icon} from 'antd'
import '../styles/Bread.less'
import Menus from './MenuConf'

class Bread extends React.Component {
    constructor(props){
        super(props)
    }

    getLocation(curPath){
        var pathArr = []
        var parentArr = []
        const getChild = (MenuArray,lastItem) =>{
            MenuArray.map(item => {
                if(item.subMenu){
                    parentArr.push(item)
                    getChild(item.subMenu,parentArr)
                }else{
                    if(item.to == curPath){
                        pathArr.push(item)
                        if(lastItem){
                            pathArr = lastItem.concat(pathArr)
                        }
                    }
                }
            })
        }
        getChild(Menus)
        return pathArr
    }
    render() {
        var curPath = this.props.history.location.pathname
        var path = this.getLocation(curPath)
        var homePath = this.getLocation('/')
        var breadPath = homePath[0].to !== path[0].to ? homePath.concat(path):path
        const breadDom = breadPath.map((item,index) => {
            if(item.to && item.to !== curPath){
                return (
                    <Breadcrumb.Item href={'#' + item.to} key={index}>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </Breadcrumb.Item>
                )
            }else{
                return (
                    <Breadcrumb.Item key={index}>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </Breadcrumb.Item>
                )
            }
        })
        return (
            <div className="bread">
                <Breadcrumb>
                    {breadDom}
                </Breadcrumb>
            </div>
        )
    }
}

Bread.defaultProps = {
};

export default Bread;
