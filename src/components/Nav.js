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
        
        return (
            <Fragment>
                <nav className="desk-nav container xs-hide">
                    <img src="/img/logo.svg" alt="logo" width="80"/>
                    <div className="links">
                        <NavLink to={{
                                pathname: '/home',
                                state: { link: 'Home' }
                                }} activeStyle={{'color': '#FF3636'}}>Home</NavLink>
                        <NavLink to={{
                                pathname: '/gallery',
                                state: { link: 'Gallery' }
                                }} activeStyle={{'color': '#FF3636'}}>Gallery</NavLink>
                        <NavLink to={{
                                pathname: '/about',
                                state: { link: 'About' }
                                }} activeStyle={{'color': '#FF3636'}}>About</NavLink>
                        <NavLink to={{
                                pathname: '/contact',
                                state: { link: 'Contact' }
                                }} activeStyle={{'color': '#FF3636'}}>Contact</NavLink>
                    </div>
                </nav>

                <nav className="mobile-nav xs-show">
                    <img src="/icons/hamburger.svg" alt="ico" width="30" onClick={this.showMenu}/>
                    <h4>{this.props.link}</h4>
                    <img src="/img/logo.svg" alt="logo" width="60"/>
                </nav>

                <div className={`menu ${ this.state.showMenu ? 'show' : 'close'}`}>
                    <div onClick={this.showMenu}>close</div>
                    <div className="iconos">
                        <div className="item">
                            <NavLink to={{
                                pathname: '/home',
                                state: { link: 'Home' }
                                }} onClick={this.showMenu}>
                                <img src="/icons/home.svg" alt="ico" width="38"/>
                                <h5>Home</h5>
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to={{
                                pathname: '/gallery',
                                state: { link: 'Gallery' }
                                }} onClick={this.showMenu}>
                                <img src="/icons/gallery.svg" alt="ico" width="35"/>
                                <h5>Gallery</h5>
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to={{
                                pathname: '/about',
                                state: { link: 'About' }
                                }} onClick={this.showMenu}>
                                <img src="/icons/about.svg" alt="ico" width="40"/>
                                <h5>About</h5>
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to={{
                                pathname: '/contact',
                                state: { link: 'Contact' }
                                }} onClick={this.showMenu}>
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