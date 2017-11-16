import React from 'react'
import Menu from './Menu'
import {config} from '../../utils'

class SiderComp extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img alt={'logo'} src={config.logo} />
                </div>
                <Menu {...this.props}/>
            </div>
        );
    }
}

SiderComp.defaultProps = {
};

export default SiderComp;
