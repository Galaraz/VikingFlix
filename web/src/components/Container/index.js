import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './style.css';

function Container(props) {
    return (
        <div className="container">
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </div>
    )
}

export default Container;