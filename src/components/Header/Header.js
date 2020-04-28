import React, {Component} from 'react';
import Navbar from './../Navbar';
import headerImage from './../../images/header.png';
import headerSmall from './../../images/header-small.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            userEmail: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('An email was entered: '+this.state.userEmail);
    }

    render() {
        return(
            <div>
                <header>
                    <Navbar />
                    <div className="header" style={{backgroundImage: `url(${headerImage})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-1-of-2">
                                    <div className="mt-160">
                                        <h1>The better way to <span>bank</span> money</h1>
                                        <p>Spend, save and manage your money, all in one place. Enjoy zero fees, and send & recieve money seamlessly across Africa</p>
                                        <form className="d-flex" onSubmit={this.handleSubmit}>
                                            <div>
                                                <i className="fa fa-envelope"></i>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    value={this.state.userEmail} 
                                                    onChange={this.handleChange}
                                                    placeholder="Type your e-mail" 
                                                /> 
                                            </div>
                                            <input 
                                                type="submit" 
                                                value="Get Started" 
                                                className="get-started" 
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-small" style={{backgroundImage: `url(${headerSmall})`}}></div>
                </header>
            </div>
        )
    }
}