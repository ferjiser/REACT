import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Gallery extends Component {
    render() {
        return (
            <section name="gallery">
                <h1>Gallery</h1>
                <Link to="/ramdom">Go to error</Link>
            </section>
        )
    }
}

export default Gallery;