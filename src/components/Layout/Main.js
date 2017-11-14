import React from 'react';
import Sider from './Sider'
import Header from './Header'


class MainComponent extends React.Component {
    state = {
        collapsed: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="layout">
                <div className="sider light">
                    <Sider />
                </div>
                <div className="main">
                    <Header />
                    <div className="container">
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

MainComponent.defaultProps = {
};

export default MainComponent;
