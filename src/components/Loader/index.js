import React from 'react';
import './index.scss'
class Loader extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

        return (
            <div className={`loader ${this.props.fullScreen?'fullScreen':''} ${this.props.showLoader?'':'hidden'}`} >
                <div className="warpper">
                    <div className="inner"></div>
                    <div className="text">
                        LOADING
                    </div>
                </div>
            </div>
        );
    }
}

Loader.defaultProps = {
};

export default Loader;
