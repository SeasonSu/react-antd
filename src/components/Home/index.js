import './index.scss'
import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Home extends React.Component {
    constructor(pros){
        super(pros)
    }
    componentDidMount() {
    const { store } = this.context;
    console.log(store)
  }
 render() {
   return (
      <div className='Home'>
        home
      </div>
   )
 }
}

const mapStoreStateToProps = (state) => ({
  dispatch: state.dispatch
});

Home.PropTypes = {
    dispatch:PropTypes.func
};

export default connect(mapStoreStateToProps)(Home)
