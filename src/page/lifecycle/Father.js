import React, { Component } from 'react';

import { logGroup } from '../../utils/appUtils';

import ThisIsMe from './Me';
import MyBrother from './Brother';

class Father extends Component {
    constructor(){
        super()
        logGroup({
            title:'MyFather',
            method: "constructor"
        })
    }
    componentWillMount(){
        logGroup({
            title:'MyFather',
            method: "componentWillMount"
        })
    }
    componentDidMount(){
        logGroup({
            title:'MyFather',
            method: "componentDidMount"
        })
    }
    componentWillUpdate(){
        logGroup({
            title:'MyFather',
            method: "componentWillUpdate"
        })
    }
    componentDidUpdate(){
        logGroup({
            title:'MyFather',
            method: "componentDidUpdate"
        })
    }
    render() {
        logGroup({
            title:'MyFather',
            method: "render"
        })
        return (
            <div>
                <h2>My father component (level 1)</h2>
                <hr/>
                <section style={{"display":"flex"}}>
                    <ThisIsMe/>
                    <MyBrother/>
                </section>     
            </div>
        );
    }
}

export default Father;