import React, { Component } from 'react';

import MuiHeader from './layout/Header';
import MuiNavPanel from './layout/NavPanel';
import MuiMainBody from './layout/MainBody';
import MuiFooter from './layout/Footer';

import MuiRoutes  from './MuiRoutes';

class MuiHome extends Component {
    state={
        header:{
            position:'relative'
        },
        nav:{
            variant:'persistent',
            open: true
        }
    }
    /**
     * Toggle menu bar state.
     * Events received from MuiHeader and MuiNavPanel using onToggleNav function.
     */
    toggleNav = () => {
        //debugger
        this.setState({
            nav:{
                open: !this.state.nav.open
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <MuiHeader 
                    header={this.state.header}
                    onToggleNav={this.toggleNav}/>

                <MuiNavPanel
                    nav={this.state.nav}
                    onToggleNav={this.toggleNav}/>
                
                <MuiMainBody>
                    <MuiRoutes/>
                </MuiMainBody>
                
                <MuiFooter/>
            </React.Fragment>
        );
    }
}

export default MuiHome;