import React from 'react';

const NavPanel = props => {
    return(
        <nav className="nav-panel">
            <h1>Navigation</h1>
            <section>
                {props.children}
            </section>
        </nav>
    )
}

export default NavPanel;