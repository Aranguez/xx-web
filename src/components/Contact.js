import React, { Fragment } from 'react';

import Nav from './Nav';

const Contact = props => {

    return (
        <Fragment>
            <Nav link={props.location.state.link}/>
            <section className="contact container BigToIn">
                <h1 className="main-title">Let's talk !</h1>
                <h1 className="mobile-title">Let's talk !</h1>
                <form className="mt30">
                    <div className="row">
                        <div className="col col-12">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="col col-12">
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="col col-12">
                            <textarea
                            className="textarea"
                            placeholder="Write your message"
                            value=""></textarea>
                        </div>
                    </div>
                </form>
            </section>
        </Fragment>
    );
}

export default Contact;
