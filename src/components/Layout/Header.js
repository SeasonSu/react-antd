 import React from 'react';
// import { Layout, Menu, Icon } from 'antd';
// const { Header, Sider, Content } = Layout;

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
//         console.log('11111')
// 　　　   this.props.toParent('aa');
　　 }
    render() {
        return (
            <div className='header'>
                header
            </div>
        )
    }
}

Header.defaultProps = {
};

export default Header;
