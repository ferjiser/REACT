import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <section name="profile">
                <h1>Profile</h1>
                <Link to="/gallery">Go to gallery</Link>
            </section>
        )
    }
}

export default Profile;