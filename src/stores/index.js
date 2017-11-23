import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import Perf from 'react-addons-perf'
window.Perf = Perf

var buildStore = compose(applyMiddleware(thunk))(createStore);

const configureStore = (initialState) => {

    const store = buildStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('reducers', () => {
            const nextRootReducer = require('reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore
