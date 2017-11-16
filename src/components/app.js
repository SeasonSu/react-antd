require('normalize.css/normalize.css');
import '../styles/app.scss';
import '../themes/default.less'
import './Layout/style/Layout.less'
import '../themes/index.less'
import React from 'react';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import {Sider,Header} from './Layout'
import {config,session} from '../utils'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMenuFold:false
        }
    }
    getChildContext() {
        return {
          store: this.props.store,
          value:'1212',
          ShowLoader:'11'
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
        return (
            <div className="application">
                <Helmet>
                    <title>{config.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                {
                    !isLogin ? this.props.children :
                    (
                        <div className={`layout ${this.state.isMenuFold?'fold':''}`}>
                            <div className="sider light">
                                <Sider {...SiderProps}/>
                            </div>
                            <div className="main">
                                <Header {...headerProps}/>
                                <div className="container">
                                    <div className="content">
                                    {children}
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

App.childContextTypes = {
    ShowLoader: PropTypes.string,
    store: PropTypes.object,
    value: PropTypes.string
};


export default App;
