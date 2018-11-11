import React, { Fragment } from 'react';

import Nav from './Nav';

const About = props => {
    return (
        <Fragment>
            <Nav link={props.location.state.link}/>
            <section className="container BigToIn">
                <h1 className="main-title mt30">About</h1>
                <div className="row">
                    <div className="col-6 foto"></div>
                    <div className="col-6 description">
                        <h2><span>Self-Taught</span> developer</h2>
                        <h2>Mainly focused in <span>Front-End</span></h2>
                        <h2><span>Graphic Design</span> student</h2>
                        <h2>Also study <span>Japanese</span></h2>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default About;
