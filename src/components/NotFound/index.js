import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import './index.scss';
import PropTypes from 'prop-types'
import {addCount} from '../../reducers/count'
class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        const {dispatch} = this.props
        console.log(this.context.store.getState())
        dispatch(addCount())
    }
    render() {
        return (
            <div className="notFound">
                <Card>
                    <div className="title">404</div>
                    Sorry,您访问的页面不存在
                </Card>
            </div>
        )
    }
}

NotFound.contextTypes = {
    store: PropTypes.object
};

const mapStateToProps = (state) =>{
    return {
        ...state
    }
}

export default connect(mapStateToProps)(NotFound);
