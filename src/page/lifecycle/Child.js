import React, { Component } from 'react';

import { logGroup } from '../../utils/appUtils';


class MyChild extends Component {
    constructor(props){
        super(props)
        logGroup({
            title: props.title,
            method: "constructor"
        })
    }
    componentWillMount(){
        logGroup({
            title:this.props.title,
            method: "componentWillMount"
        })
    }
    componentDidMount(){
        logGroup({
            title:this.props.title,
            method: "componentDidMount"
        })
    }
    componentWillUpdate(){
        logGroup({
            title:this.props.title,
            method: "componentWillUpdate"
        })
    }
    componentDidUpdate(){
        logGroup({
            title:this.props.title,
            method: "componentDidUpdate"
        })
    }
    render() {
        logGroup({
            title:this.props.title,
            method: "render"
        })
        return (
            <div>
                <h4>{this.props.desc}</h4>
            </div>
        );
    }
}

export default MyChild;