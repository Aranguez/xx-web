import React, { Fragment } from 'react';

import Nav from './Nav';

const Main = props => {

    const state = {
        link: 'Home'
    }

    return (
        <Fragment>
            <Nav link={ props.location.state === undefined ?
                        state.link : props.location.state.link}/>
            <section className="main container BigToIn">
                <h1 className="home-title">
                    <span className="c-red">UI/UX </span>
                    <span className="xs-hide">Design</span> <span className="xs-show">&</span><br/>
                    <span className="xs-hide">&</span> Front-End
                </h1><br/>

                <h5 className="xs-show mt30">
                    Made with<br/>
                    <span className="c-red">code & love</span>
                </h5>
            </section>
        </Fragment>
    );
}

export default Main;
