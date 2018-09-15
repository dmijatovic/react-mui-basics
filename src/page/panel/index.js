
import React, { Component } from 'react';

import FlexRowPanel from "./Panel";
import Comp1 from './Comp1';
import Comp2 from './Comp2';

import './index.css';

class FlexRowPage extends Component {
    state={
        items:[
            <Comp1/>, <Comp2/>, <Comp1/>
        ]
    }
    addPanel = () => {
        let itemList = [
            ...this.state.items,
            <Comp1/>
        ]
        this.setState({
            items: itemList
        })
    }
    removePanel = () => {
        //debugger
        let itemList = this.state.items.slice(1)
        this.setState({
            items: itemList
        })
    }
    render() {
        return (
            <div>
                <h1>Select items for the panel</h1>
                
                <button onClick={this.addPanel}>Add panel</button>
                <button onClick={this.removePanel}>Remove panel</button>
                
                <hr/>
                { this.state.items.length > 0 ? (
                    <FlexRowPanel
                        items = {this.state.items}
                        />
                ):(
                    <h1>No items in flex planel</h1>
                )}
                
            </div>
        );
    }
}

export default FlexRowPage;