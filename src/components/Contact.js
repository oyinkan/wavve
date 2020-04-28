import React, {Component} from 'react';
import AboutHeader from './About-Header';
import ContactMain from './Contact-Main';
import Footer from './Footer';

export default class Contact extends Component {
    render() {
        return(
            <div>
                <AboutHeader 
                    title="Contact our product team" 
                    details="If you need our help, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us." 
                />
                <ContactMain />
                <Footer />
            </div>
        )
    }
}