import React, {Component} from 'react';
import Navbar from './Navbar';
import about from './../images/about.svg';

export default class AboutHeaader extends Component {
    render() {
        let { title, details } = this.props;
        return(
            <div style={{backgroundImage: `url(${about})`}} className="about-header">
                <Navbar />
                <div className="about-wrapper text-center">
                    <h1>{title}</h1>
                    <p>{details}</p>
                </div>
            </div>
        )
    }
}