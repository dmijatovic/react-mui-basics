import React, { Component } from 'react';

import { logGroup } from '../../utils/appUtils';

import Child from './Child';

class Brother extends Component {
    constructor(){
        super()
        logGroup({
            title:'MyBrother',
            method: "constructor"
        })
    }
    componentWillMount(){
        logGroup({
            title:'MyBrother',
            method: "componentWillMount"
        })
    }
    componentDidMount(){
        logGroup({
            title:'MyBrother',
            method: "componentDidMount"
        })
    }
    componentWillUpdate(){
        logGroup({
            title:'MyBrother',
            method: "componentWillUpdate"
        })
    }
    componentDidUpdate(){
        logGroup({
            title:'MyBrother',
            method: "componentDidUpdate"
        })
    }
    render() {
        logGroup({
            title:'MyBrother',
            method: "render"
        })
        return (
            <div>
                <h3>This is my brother (level 3 - same level as me)</h3>
                <hr/>
                <Child 
                    title="MyBrothersChild"
                    desc="This is my brother child (Level 3)"
                />
            </div>
        );
    }
}

export default Brother;