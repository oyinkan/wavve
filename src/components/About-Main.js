import React, {Component} from 'react';
import banner from './../images/company-banner.png';
import SingleValue from './SingleValue';
import collaboration from './../images/collaboration.svg';
import transparency from './../images/transparency.svg';
import trust from './../images/trust.svg';
import integrity from './../images/integrity.svg'; 

export default class AboutMain extends Component {
    render() {
        return(
            <React.Fragment>
                <main>
                    <div className="container-fluid aboutus-container">
                        <p className="about-us">ABOUT US</p>
                        <div className="row">
                            <div className="col-1-of-2">
                                <h3>We provide enterprises with innovative technology for small to space enterprises</h3>
                            </div>
                            <div className="col-1-of-2">
                                <p>We supply enterprises, organizations and institutes of high-tech industries with modern components. We build long-term trusting relationships with our customers and partnes for further fruitful cooperations.<br/><br/>
                                From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
                            </div>
                        </div>
                    </div>
                    <div className="company-banner" style={{backgroundImage: `url(${banner})`}}></div>
                    <div className="values-wrapper text-center">
                        <h3>Our values</h3>
                        <p className="mb-40">We strive to redefine the standard of excellence.</p>
                        <div className="values-div">
                            <div className="row">
                                <div className="col-1-of-2">
                                    <SingleValue
                                        image={collaboration}
                                        text="icon for collaboration"
                                        title="Collaboration"
                                        details="Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal."
                                    />
                                </div>
                                <div className="col-1-of-2">
                                    <SingleValue
                                        image={transparency}
                                        text="icon for transparency"
                                        title="Transparency"
                                        details="Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed."
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1-of-2">
                                    <SingleValue
                                        image={trust}
                                        text="icon for trust"
                                        title="Trust"
                                        details="Trust will help us foster a positive and productive environment that delivers value to our users and customers."
                                    />
                                </div>
                                <div className="col-1-of-2">
                                    <SingleValue
                                        image={integrity}
                                        text="icon for integrity"
                                        title="Intergrity"
                                        details="Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}