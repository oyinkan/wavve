import React, {Component} from 'react';
import menu from './../images/menu.svg';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-container">
                    <nav className="navbar">
                        <input type="checkbox" id="navbar-check" />
                        <div className="navbar-header">
                            <div className="navbar-brand"><Link to="/">wavve.</Link></div>
                        </div>
                        <div className="navbar-button">
                            <label htmlFor="navbar-check">
                                <img src={menu} alt="menu icon" />
                            </label>
                        </div>
                        <div className="navbar-links">
                            <Link to="/about">About us</Link>
                            <Link to="">FAQ</Link>
                            <Link to="">Blog</Link>
                            <Link to="/contact">Contact us</Link>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}