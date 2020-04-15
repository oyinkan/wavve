import React, {Component} from 'react';
import twitter from './../images/twitter.svg';
import linkedin from './../images/linkedin.svg';
import facebook from './../images/facebook.svg';
import buttonapp from './../images/button-app.png';
import buttonplay from './../images/button-play.png';

export default class Footer extends Component {
    render() {
        return(
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-1-of-4">
                                <p className="fairly-bold">Company</p>
                                <div>
                                    <p><a href="">About us</a></p>
                                    <p><a href="">FAQs</a></p>
                                    <p><a href="">Blog</a></p>
                                    <p><a href="">Contact us</a></p>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <p>Legals</p>
                                <div>
                                    <p><a href="">Privacy Policy</a></p>
                                    <p><a href="">Terms of Service</a></p>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <div className="d-flex social-links">
                                    <div>
                                        <a href="" target="_blank"><img src={buttonapp} className="img-fluid" alt="" /></a>
                                    </div>
                                    <div>
                                        <a href="" target="_blank"><img src={buttonplay} className="img-fluid" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <div className="d-flex">
                                    <div>
                                        <a href="" target="_blank"><img src={twitter} alt="twitter icon" /></a>
                                    </div>
                                    <div>
                                        <a href="" target="_blank"><img src={linkedin} alt="linkedin icon" /></a>
                                    </div>
                                    <div>
                                        <a href="" target="_blank"><img src={facebook} alt="facebook icon" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <p>*Wavvemoney users get 10 free transfer to other wallets every month. Extra transfers to banks cost CFA 10 each.</p><br/>                           
                            <p>© 2020 Wavvemoney Incorporation. All rights reserved. All deposits are insured by the Cameroonian Deposit Insurance Corporation (NDIC).Wavvemoney Incorporation is licensed by the Central Bank of Cameroun. “Wavve” and “Wavvemoney” are trademarks of Wavve Technologies Ltd Yaounde: 151 Herbert Macaulay Way, Yaounde, Cameroun.</p><br />
                            <p>Wavvemoney wallet Account is provided through Wavvemoney Incorporation. All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works of Wavvemoney Incorporation. All Rights Reserved. Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary.</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}