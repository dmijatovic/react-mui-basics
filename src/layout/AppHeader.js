import React, { Component } from 'react';

import {
    withStyles, Drawer,
    AppBar, Toolbar,
    Typography, IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
  
import Styles from './styles' ;

class AppHeader extends Component {
    handleDrawerToggle = () => {
        //this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    }
    render() {
        const { classes, theme } = this.props;
        return (
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                    { this.state.appTitle }
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default AppHeader;