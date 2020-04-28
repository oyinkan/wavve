import React, {Component} from 'react';
import SingleValue from './SingleValue';
import Newsletter from './Newsletter';
import callicon from './../images/call.svg';
import supporticon from './../images/support.svg';

export default class FaqMain extends Component {
    componentDidMount() {
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }
    }
    render() {
        return (
            <React.Fragment>
                <main className="faq-main">
                    <div className="faq-wrapper">
                        <h3 className="text-center">Frequently asked questions</h3>
                        <div className="faq-accordion">
                            <button className="accordion">How do I send money to another wallet?</button>
                            <div className="panel">
                                <p>You can pay with a wallet card or via net banking (if you’re in Cameroon). We will renew your subscription automatically at the end of every billing cycle.</p>
                            </div>

                            <button className="accordion">Can I cancel my Essentials or plan subscription at any time?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion">We need to add new users to our team. How will that be billed?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion">My team wants to cancel its subscription. How do we do that? Can we get a refund?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <button className="accordion">Do you offer discounts for non-profit organizations or educational institutions?</button>
                            <div className="panel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="values-wrapper questions-wrapper text-center">
                        <h3>Still have a questions?</h3>
                        <p className="mb-40">If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!</p>
                        <div className="questions-div">
                            <div className="row">
                                <div className="col-1-of-2">
                                    <div className="faq-card">
                                        <SingleValue 
                                            image={callicon}
                                            text="call icon"
                                            title="+1 (646) 786-5060"
                                            details="We are always happy to help."
                                        />
                                    </div>
                                </div>
                                <div className="col-1-of-2">
                                    <div className="faq-card">
                                        <SingleValue 
                                            image={supporticon}
                                            text="support icon"
                                            title="support@wavvemoney.com"
                                            details="Alternative way to get anwser faster."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Newsletter />
                </main>
            </React.Fragment>
        )
    }
}