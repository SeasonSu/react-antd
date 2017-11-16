import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='Home'>
                home
            </div>
        )
    }
}

Home.contextTypes = {
    ShowLoader: PropTypes.string,
    store: PropTypes.object,
    value: PropTypes.string
};

export default Home;
