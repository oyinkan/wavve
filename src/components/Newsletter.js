import React, {Component} from 'react';
import newsletter from './../images/newsletter.svg';

export default class Newsletter extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="newsletter-wrapper" style={{backgroundImage: `url(${newsletter})`}}>
                    <div className="container">
                        <div className="d-flex">
                            <div className="one-sixth">
                                <div>
                                    <h2>Join Our Newsletter</h2>
                                    <p>Just insert your email into the field below. And you will get the updates about Wavvemoney</p>
                                </div>
                            </div>
                            <div className="one-fourth">
                                <div className="mt-40">
                                    <form className="text-right">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                        />
                                        <i className="fa fa-envelope"></i>
                                        <input 
                                            type="submit" 
                                            value="Subscribe"
                                            className="get-started" 
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}