import React, {Component} from 'react';
import Navbar from './Navbar';
import FaqMain from './Faq-Main';
import Footer from './Footer'; 

export default class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="faq-header">
                    <Navbar />
                </header>
                <FaqMain />
                <Footer />
            </React.Fragment>
        )
    }
}