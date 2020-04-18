import React, {Component} from 'react';

export default class SingleValue extends Component {
    render() {
        let { image, text, title, details } = this.props;
        return(
            <div className="single-value mt-20">
                <img src={image} className="img-fluid" alt={text} />
                <p className="title">{title}</p>
                <p className="details">{details}</p>
            </div>
        )
    }
}