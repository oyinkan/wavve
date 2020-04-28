import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar-container">
                    <nav className="navbar">
                        <input type="checkbox" id="navbar-check" />
                        <div className="navbar-header">
                            <div className="navbar-brand"><Link to="/">wavve.</Link></div>
                        </div>
                        <div className="navbar-button">
                            <label htmlFor="navbar-check">
                                <i className="fa fa-bars"></i>
                            </label>
                        </div>
                        <div className="navbar-links">
                            <Link to="/about">About us</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="">Blog</Link>
                            <Link to="/contact">Contact us</Link>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}