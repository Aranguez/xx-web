import React, { Fragment } from 'react';

import Nav from './Nav';

const About = props => {
    return (
        <Fragment>
            <Nav link={props.location.state.link}/>
            <section className="container BigToIn">
                <h1 className="main-title mt30">About</h1>
            </section>
        </Fragment>
    );
}

export default About;
