import React from 'react';

/**
 * HigerOrderComponent adds functionality to base component
 * this example check if match is provided by parent as part of props
 * @param {*} BaseComponent: base component 
 */
const CheckForMatchProp = BaseComponent => {
    //passing properties further down the chain
    return (props) => (
        <div>
            <hr/>
            <h1>Router match detector HOC</h1>
            <p>This is the content of HOC component</p>
            { props.match ? (
                    <h3>Has router match prop</h3>
                ) : (
                    <h3>Has NOT the router match prop</h3>
                )
            }
            <hr/>
            <BaseComponent {...props}/>
            <hr/>
        </div>
    )
};

export default CheckForMatchProp;