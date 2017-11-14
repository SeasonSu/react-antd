require('normalize.css/normalize.css');
import '../styles/app.scss';
import '../themes/default.less'
import './Layout/style/Layout.less'
import '../themes/index.less'
import React from 'react';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import {
    Main
} from './Layout'
import queryString from 'query-string'
const params = queryString.parse(location.search)

class App extends React.Component {

    constructor(props, context) {
     super(props, context)
     this.store = props.store;
   }

    state = {
　　　　name:''
    }
    getChildInfo = (name)=>{
　　 　　this.setState({name:name});
　　 }
    getChildContext= () => {
        // console.log('!!!-----')
        // console.log(this.props.store)
       return {
         ShowLoader: 'show'
       };
     }
    render() {
        //    console.log(this.props)
        return (
            <div className="application">
                <Helmet>
                    <title>ANTD </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                {params.name=='nd'?this.props.children:<Main children={this.props.children}/>}
            </div>
        )

    }
}
App.childContextTypes = {
  ShowLoader: PropTypes.string
}

App.defaultProps = {
};

export default App;
