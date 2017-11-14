import React from 'react';
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import { createLooger} from 'redux-logger'
import reducers.{initialState} from './reducers'

let enhancer = applyMiddleware(thunk)

if(process.env.NODE_ENV === 'development'){
    enhancer = compose(
        applyMiddleware(thunk,createLooger())
    )
}

let store = createStore(
    reducers,
    initialState,
    enhancer
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default store
