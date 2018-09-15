import React, { Component } from 'react';

class BaseComponent extends Component {
    render() {
        return (
            <div>
                <h2>This is content of base component</h2>
                {this.props.match && (
                    <h3>I received match props from HOC</h3>
                )}
            </div>
        );
    }
}

export default BaseComponent;