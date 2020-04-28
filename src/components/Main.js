import React, {Component} from 'react';
import realtime from './../images/realtime.svg';
import security from './../images/security.svg';
import paperless from './../images/paperless.png';
import appstore from './../images/app-store.svg';
import googleplay from './../images/google-play.svg';
import howitworks from './../images/howitworks.png';
import one from './../images/one.svg';
import two from './../images/two.svg';
import three from './../images/three.svg';
import four from './../images/four.svg';
import Newsletter from './Newsletter';

export default class Main extends Component {
    render() {
        return(
            <div>
                <main>
                    <div className="services-wrapper">
                        <div className="container">
                            <div className="banking">BANKING GOT EASIER</div>
                            <div className="row">
                                <div className="col-1-of-3">
                                    <div>
                                        <h3>Get <span>Absolute</span> Control over your Money</h3>
                                    </div>
                                </div>
                                <div className="col-1-of-3">
                                    <div className="d-flex">
                                        <div>
                                            <img src={realtime} alt="an icon" />
                                        </div>
                                        <div>
                                            <p className="realtime">Realtime Banking</p>
                                            <p>Instantly send and request money from your friends at the touch of a button</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-of-3">
                                    <div className="d-flex">
                                        <div>
                                            <img src={security} alt="an icon" />
                                        </div>
                                        <div>
                                            <p className="realtime">Bank-Grade Security</p>
                                            <p>Wavve’s bank-level security protects your sensitive details & prevents unauthorized access.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="download-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-1-of-2">
                                    <div className="mt-100">
                                        <h2>Completely paperless.<br/> Sign up anywhere.</h2>
                                        <p>No more joining queues at bank branches.<br/>Joining Wavvemoney is easy:<br/>Download the app on Google Play or the App Store.</p>
                                        <div className="d-flex">
                                            <div>
                                                <a href="" target="_blank">
                                                    <img src={appstore} className="img-fluid" alt="appstore icon" />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="" target="_blank">
                                                    <img src={googleplay} className="img-fluid" alt="googleplay icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-of-2">
                                    <div>
                                        <img src={paperless} className="img-fluid" alt="an illustration depicting paperless" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="howitworks-wrapper">
                        <div className="d-flex">
                            <div className="half">
                                <div style={{background: `url(${howitworks})`, backgroundSize: "cover"}} className="howitworks-image"></div>
                            </div>
                            <div className="half">
                                <div className="howitworks-div">
                                    <div className="how-it-works">HOW IT WORKS</div>
                                    <div>
                                        <h3>How to Use Wavvemoney?</h3>
                                        <div className="d-flex">
                                            <div>
                                                <img src={one} alt="an icon" />
                                            </div>
                                            <div>
                                                <p className="realtime">Download the Wavvemoney app</p>
                                                <p>Download the app in seconds and we’ll send you a verificaiton code. That’s all you need. </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div>
                                                <img src={two} alt="an icon" />
                                            </div>
                                            <div>
                                                <p className="realtime">Fill in a few details about yourself</p>
                                                <p>Just give us few information about you and we’ll use that to confirm your identity on the platform. </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div>
                                                <img src={three} alt="an icon" />
                                            </div>
                                            <div>
                                                <p className="realtime">Activate your wallet</p>
                                                <p>Once your details are verified, you will fund your wallet with 10CFA to get your account activated.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div>
                                                <img src={four} alt="an icon" />
                                            </div>
                                            <div>
                                                <p className="realtime">Start Enjoying Digital Banking!</p>
                                                <p>Once your listing is live, qualified guests can reach out and you can message them.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Newsletter />
                </main>
            </div>
        );
    }

}