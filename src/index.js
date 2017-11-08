import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch,
  Redirect
} from 'react-router-dom';

import App from './components/Main';
import NotFound from './components/404';


ReactDOM.render((
     <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/index" component={App}/>
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
     </Router>
     ),
     document.getElementById('app')
);
