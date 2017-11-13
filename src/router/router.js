import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux'

import App from '../components/app';
import NotFound from '../components/NotFound';
import Home from '../components/Home'

class ReactRouters extends React.Component {
    render(){
        const { history,store } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App >
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </App>
                </Router>
            </Provider>
         )
     }
 }

export default ReactRouters
