import React, { Fragment } from 'react';

import Nav from './Nav';

const Gallery = props => {

    return (
        <Fragment>
            <Nav link={props.location.state.link}/>
            <section className="BigToIn">
                <div className="container">
                    <h1 className="main-title">Gallery</h1>
                </div>
                <div className="gallery grid">
                    <div className="item"></div>
                    <div className="item b-gray"></div>
                    <div className="item"></div>
                    <div className="item b-gray"></div>

                    <div className="item b-gray"></div>
                    <div className="item"></div>
                    <div className="item b-gray"></div>
                    <div className="item"></div>

                    <div className="item"></div>
                    <div className="item b-gray"></div>
                    <div className="item"></div>
                    <div className="item b-gray"></div>
                </div>
            </section>
        </Fragment>
    );
}

export default Gallery;
