import React from 'react';

import createHistory from 'history/createBrowserHistory'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {
    routerReducer,
     routerMiddleware
} from 'react-router-redux'
import ReactRouters from './router'
// import reducers from './reducers'
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
//    ...reducers,
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

class Routers extends React.Component {
    constructor(props){
        super(props)
    }
    handlerNotFound(){
        console.log('1')
    }
    render(){
        return (
            <ReactRouters history={history} store={store} />
         )
     }
 }

export default Routers
