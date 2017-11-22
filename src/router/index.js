import React from 'react';
import createHistory from 'history/createHashHistory'
import ReactRouters from './router'
import configureStore from '../store'
const history = createHistory()
const store = configureStore()

class Routers extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ReactRouters history={history} store={store} />
         )
     }
 }

export default Routers
