require('normalize.css/normalize.css');
import 'styles/app.scss';
import 'themes/default.less'
import './styles/Layout.less'
import 'themes/index.less'
import React from 'react';
import { Helmet } from 'react-helmet'
import {Sider,Header,Bread} from './components'
import {config,session} from 'utils'
import PropTypes from 'prop-types'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMenuFold:false,
            isNavbar:document.body.clientWidth < 769
        }
    }

    render() {
        var _this = this
        var isLogin = session.has(config.sessionKey.userInfo)
    
        if(this.props.history.location.pathname == '/login'){
            session.remove(config.sessionKey.userInfo)
            isLogin = false
        }
        var children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                foo: 'sasasas'
            })
        })
        var headerProps = {
            ...this.props,
            isNavbar:this.state.isNavbar,
            handlerMenuFold(isMenuFold){
                _this.setState({
                    isMenuFold:!isMenuFold
                })
            }
        }
        var SiderProps = {
            ...this.props,
            isMenuFold:this.state.isMenuFold
        }
        window.onresize = () => {
            _this.setState({
                isNavbar:document.body.clientWidth < 769
            })
        }
        return (
            <div className="application">
                <Helmet>
                    <title>{config.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                {
                    !isLogin
                    ?
                    (
                        <div className="container">
                            <div className="content">
                                <div className="contentInner">
                                    {children}
                                </div>
                            </div>
                        </div>
                    ):
                    (
                        <div className={`layout ${this.state.isMenuFold?'fold':''} ${this.state.isNavbar?'withnavbar':''}`}>
                            {   !this.state.isNavbar ?
                                (<div className="sider light">
                                    <Sider {...SiderProps}/>
                                </div>)
                                :(
                                    <div></div>
                                )
                            }
                            <div className="main">
                                <Header {...headerProps}/>
                                <Bread {...this.props}/>
                                <div className="container">
                                    <div className="content">
                                        <div className="contentInner">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

App.contextTypes = {
    store: PropTypes.object
};


export default App;
