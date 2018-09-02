import React from 'react';

const Contact = () => {
    return (
        <section className="contact container BigToIn">
            <h1 className="main-title mt30">Let's talk !</h1>
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
                        value="Good morning, greettins from Israel, i'm looking for a designer like your type, can i call you by skype?"></textarea>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Contact;
