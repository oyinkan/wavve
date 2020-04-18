import React, {Component} from 'react';
import AboutHeader from './About-Header';
import AboutMain from './About-Main';
import Footer from './Footer';

export default class About extends Component {
    render() {
        return(
            <div>
                <AboutHeader 
                    title="Experience you can trust" 
                    details="From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises." 
                />
                <AboutMain />
                <Footer />
            </div>
        )
    }
}