import React, { Component } from 'react';

import { logGroup } from '../../utils/appUtils';

import Child from './Child';


class ThisIsMe extends Component {
    constructor(){
        super()
        logGroup({
            title:'ThisIsMe',
            method: "constructor"
        })
    }
    componentWillMount(){
        logGroup({
            title:'ThisIsMe',
            method: "componentWillMount"
        })
    }
    componentDidMount(){
        logGroup({
            title:'ThisIsMe',
            method: "componentDidMount"
        })
    }
    componentWillUpdate(){
        logGroup({
            title:'ThisIsMe',
            method: "componentWillUpdate"
        })
    }
    componentDidUpdate(){
        logGroup({
            title:'ThisIsMe',
            method: "componentDidUpdate"
        })
    }
    render() {
        logGroup({
            title:'ThisIsMe',
            method: "render"
        })
        return (
            <div>
                <h3>This is me in the family three/hiararchy (Level 2)</h3>
                <hr/>
                <Child 
                    title="MyChild"
                    desc="This is my child (Level 3)"
                />
            </div>
        );
    }
}

export default ThisIsMe;