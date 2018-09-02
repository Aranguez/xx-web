import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

    constructor(props){
        super();
        this.state = {
            showMenu: false
        }
    }

    showMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
        if (document.querySelector('body').classList.contains('menu-open')) {
            document.querySelector('body').classList.remove('menu-open')
        } else {
            document.querySelector('body').classList.add('menu-open')
        }
        
    }

    render() {
        console.log(this.state.showMenu)
        return (
            <Fragment>
                <nav className="desk-nav container xs-hide">
                    <img src="/img/logo.svg" alt="logo" width="80"/>
                    <div className="links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </nav>

                <nav className="mobile-nav xs-show">
                    <img src="/icons/hamburger.svg" alt="ico" width="30" onClick={this.showMenu}/>
                    <h4>Home</h4>
                    <img src="/img/logo.svg" alt="logo" width="60"/>
                </nav>

                <div className={`menu ${ this.state.showMenu ? 'show' : 'close'}`}>
                    <div onClick={this.showMenu}>close</div>
                    <div className="iconos">
                        <div className="item">
                            <NavLink to="/" onClick={this.showMenu}>
                                <img src="/icons/home.svg" alt="ico" width="38"/>
                                <h5>Home</h5>
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to="/gallery" onClick={this.showMenu}>
                                <img src="/icons/gallery.svg" alt="ico" width="35"/>
                                <h5>Gallery</h5>
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to="/about" onClick={this.showMenu}>
                                <img src="/icons/about.svg" alt="ico" width="40"/>
                                <h5>About</h5>
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to="/contact" onClick={this.showMenu}>
                                <img src="/icons/contact.svg" alt="ico" width="40"/>
                                <h5>Contact</h5>
                            </NavLink>
                        </div>
                    </div>
                    <div className="background-menu"></div>
                </div>
            </Fragment>
        );
    }
}

export default Nav;