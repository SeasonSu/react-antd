import React from 'react';
import createHistory from 'history/createHashHistory'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {
    routerReducer,
     routerMiddleware
} from 'react-router-redux'
import ReactRouters from './reactRouter'
 // import reducers from './reducers'
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
    // ...reducers,
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}

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
