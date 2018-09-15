import React from 'react';

const MainBody = props => {
    return (
        <section className="app-body">
            { props.children ? (
                props.children
            ):(
                <h1>empty body!</h1>
            )}
        </section>
    );
};

export default MainBody;