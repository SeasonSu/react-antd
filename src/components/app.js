require('normalize.css/normalize.css');
require('styles/App.css');
import '../themes/index.scss'
import React from 'react';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';
// import queryString from 'query-string'
import {
    Header,
    Menu
} from './Layout'
// const search = queryString.parse(location.search)

// import NotFound from '../components/NotFound';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log(search)
    //     console.log(this.props)
    //     //this.admin = search.name == 'nd' ? true : false
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
        console.info(this)
        //    console.log(this.props)
        return (
            <div className="application">
                <Helmet>
                    <title>ANTD </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <Header toParent={this.getChildInfo.bind(this)} />
                <Menu />
                {this.props.children}
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
