import React, {Component} from 'react';
import Navbar from './Navbar';
import headerImage from './../images/header.png';

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
        alert('An email was entered: '+this.state.userEmail);
        event.preventDefault();
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
                                        <form onSubmit={this.handleSubmit}>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                value={this.state.userEmail} 
                                                onChange={this.handleChange}
                                                placeholder="Type your e-mail" 
                                            />
                                            <i className="fa fa-envelope"></i>
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
                </header>
            </div>
        )
    }
}