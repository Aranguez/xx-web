import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="logo-footer">
                    <span>
                        <img src="/img/logo.svg" width="50" alt="logo"/>
                        <h5>Leandro Aranguez</h5>
                    </span>
                </div>
                <div className="b-red">
                    <div>
                        <h1>Gimme your feedback</h1>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/leandro_aranguez/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram.svg" width="32" alt="instagram"/>
                        </a>
                        <a href="https://www.linkedin.com/in/leandro-aranguez-53345615b/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.svg" width="35" alt="linkedin"/>
                        </a>
                    </div>
                </div>
            </footer>
            <footer className="mobile-footer">
                <div className="logo-footer">
                    <img src="/img/logo.svg" width="50" alt="logo"/>
                    Leandro Aranguez
                </div>
                <div>
                    <h1>Gimme your feedback</h1>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/leandro_aranguez/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.svg" width="32" alt="instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/leandro-aranguez-53345615b/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/linkedin.svg" width="35" alt="linkedin"/>
                    </a>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;