import React, {Component} from 'react';
import SingleValue from './SingleValue';
import messageicon from './../images/message-icon.svg';
import call from './../images/call-icon.svg';
import support from './../images/support-icon.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class ContactMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateInput = () => {
        const {
          name,
          email,
          message
        } = this.state;
    
        let inputValues = [
          { name: "name", value: name },
          { name: "email", value: email },
          { name: "message", value: message }
        ];
    
        let hasInputerror = false;
    
        for (var i = 0; i < inputValues.length; i++) {
            let name = inputValues[i].name,
            value = inputValues[i].value;
            if (value === "" || value === undefined) {
                $(`[name=${name}]`).addClass("border-red");
                hasInputerror = true;
            } else {
                $(`[name=${name}]`).removeClass("border-red");
            }
        }
    
        return hasInputerror;
    };

    handleSubmit = (e) => {
        e.preventDefault();  
        const {
            name,
            email,
            message
        } = this.state;
        
        let value = {
            name: name,
            email: email,
            message: message
        };
        
        let hasErrors = this.validateInput();
        if (!hasErrors) {
            alert('An email was entered: '+this.state.email);
            document.querySelector('#check').style.display = "inline";
        }      
    };

    render() {
        const {name, email, message} = this.state;
        return(
            <React.Fragment>
                <main className="contact-main">
                    <div className="contact-wrapper">
                        <form onSubmit={this.handleSubmit} >
                            <div className="row">
                                <div className="col-1-of-2">
                                    <div>
                                        <label>
                                            Your name*
                                            <input 
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={this.handleChange}
                                                placeholder="John Doe"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-1-of-2">
                                    <div>
                                        <label>
                                            Contact email*
                                            <input 
                                                type="text"
                                                name="email"
                                                value={email}
                                                onChange={this.handleChange}
                                                placeholder="you@example.com"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Your message*
                                    <textarea
                                        value={message}
                                        name="message"
                                        onChange={this.handleChange}
                                        placeholder="Type your message..."
                                    />
                                </label>
                            </div>
                            <p>By submitting this form you agree to our <a href="">terms and conditions</a> and our <a href="">Privacy Policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                            <input 
                                type="submit" 
                                className="get-started" 
                                value="Send Message"
                            />
                            <span id="check"><i className="fa fa-check"></i> &nbsp;Your message has been sent</span>
                        </form>
                    </div>
                    <div className="contact-details text-center">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-1-of-3">
                                    <SingleValue
                                        image={messageicon}
                                        text="message icon"
                                        title="Email us"
                                        details="Email us for general queries, including marketing and partnership opportunities."
                                    />
                                    <a href="mailto:hello@wavvemoney.com">hello@wavvemoney.com</a>
                                </div>
                                <div className="col-1-of-3">
                                    <SingleValue
                                        image={call}
                                        text="call icon"
                                        title="Call us"
                                        details="Call us to speak to a member of our team. We are always happy to help."
                                    />
                                    <a href="tel:+1 (646) 786-5060">+1 (646) 786-5060</a>
                                </div>
                                <div className="col-1-of-3">
                                    <SingleValue
                                        image={support}
                                        text="support icon"
                                        title="Support"
                                        details="Check out helpful resources, FAQs and developer tools."
                                    />
                                    <Link className="view-faq" to="/faq">View FAQ &nbsp;<i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}