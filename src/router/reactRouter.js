import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux'
import App from '../components/app';
import routersConf from './config'

const routers = routersConf.map((item,index) => (
    <Route exact path={item.path} component={item.component} key={index}/>
))

class ReactRouters extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {store,history} = this.props
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App store={store} history={history}>
                        <Switch>
                            {routers}
                        </Switch>
                    </App>
                </Router>
            </Provider>
         )
     }
 }

export default ReactRouters
