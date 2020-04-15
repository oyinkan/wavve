import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-container">
                    <nav className="navbar">
                        <input type="checkbox" id="navbar-check" />
                        <div className="navbar-header">
                            <div className="navbar-brand">wavve.</div>
                        </div>
                        <div className="navbar-button">
                            <label htmlFor="navbar-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <div className="navbar-links">
                            <a href="#">About us</a>
                            <a href="#">FAQ</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact us</a>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}