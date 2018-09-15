import React, { Component } from 'react';

import Father from './Father';
import { logGroup } from '../../utils/appUtils';


class Grandpa extends Component {
    constructor(){
        super()
        logGroup({
            title:'MyGrandpa',
            method: "constructor"
        })
    }
    componentWillMount(){
        logGroup({
            title:'MyGrandpa',
            method: "componentWillMount"
        })
    }
    componentDidMount(){
        logGroup({
            title:'MyGrandpa',
            method: "componentDidMount"
        })
    }
    componentWillUpdate(){
        logGroup({
            title:'MyGrandpa',
            method: "componentWillUpdate"
        })
    }
    componentDidUpdate(){
        logGroup({
            title:'MyGrandpa',
            method: "componentDidUpdate"
        })
    }
    render() {
        logGroup({
            title:'MyGrandpa',
            method: "rendor"
        })
        return (
            <div>
                <h1>My grandpa - top level component (level 0)</h1>
                <hr/>
                <Father/>    
                <hr/>
                OPEN CONSOLE LOG TO SEE COMPONENT LIFECYCLE HOOKS!
            </div>
        );
    }
}

export default Grandpa;