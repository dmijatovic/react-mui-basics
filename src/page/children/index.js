import React from 'react';

import Header from './Header';
import NavPanel from './NavPanel';
import Main from './Main';
import Footer from './Footer';

export default () => {
    return(
        <React.Fragment>
            <Header/>
            <section className="main-layout">
            <NavPanel className="app-nav-panel">
                <ul>
                <li>Broj 1</li>
                <li>Broj 2</li>
                <li>Broj 3</li>
                <li>Broj 4</li>
                <li>Broj 5</li>
                </ul>
            </NavPanel>
            <Main className="app-content">
                <section>
                <h3>Passing DOM elements into component - COMPOSITION</h3>
                <p>
                    React component can take html markup from parent. To facilitate this functionality the component needs 
                    to implement props.children.
                </p>
                </section>
            </Main>
            </section>
            <Footer/>
        </React.Fragment>
    )
}