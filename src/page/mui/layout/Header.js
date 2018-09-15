import React, { Component } from 'react';

import { AppBar } from '@material-ui/core';

class Header extends Component {
    
    render() {
        let { header, onToggleNav} = this.props;
        return (
            <AppBar
                position={header.position}>
                <h1>MUI header component</h1>
                <button onClick={onToggleNav}>Menu</button>
            </AppBar>
        );
    }
}

export default Header;