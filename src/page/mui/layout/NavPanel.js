import React from 'react';

import { Drawer, Paper } from '@material-ui/core';

import { routeDef } from '../MuiRoutes';
import { Link } from 'react-router-dom';

class NavPanel extends React.Component {
    state={
        links:[]
    }
    componentDidMount(){
        //debugger
        let links = routeDef.map((item,id)=>{
            return(
                {  
                    to: item.path,
                    label: item.label    
                }
            ) 
        })
        //debugger
        this.setState({
            links 
        })
    }
    createLinks(){
        return this.state.links.map((item,id)=>{
            return (
                <Link key={item.to} to={item.to}><li>{item.label}</li></Link> 
            )
        }) 
    }
    /**
     * Toggle navigation bar.
     * Passes toggle request to parent component using functino onToggleNav
     * provided as prop by parent
     */
    toggleNav = () =>{
        //console.log("Toggle nav...1")
        this.props.onToggleNav();
    }
    render (){
        /**
         * NOTE! destructuring function from props HELPS you
         * to avoid using bind(this) keyword when using DOM events
         * like onClick. 
         */
        let { nav, onToggleNav } = this.props
        return (
            <Drawer
                variant={nav.variant}
                open={nav.open}>
                
                <h2>Navigation panel</h2>

                <button onClick={this.toggleNav}>Close 1</button>

                <button onClick={onToggleNav}>Close 2</button>

                <ul>
                    {this.createLinks()}
                </ul>
                
            </Drawer>
        );
    }
};

export default NavPanel;