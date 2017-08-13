import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {
    render() {
        return (
            <section name="post">
                <h1>Post</h1>
                <Link to="/user/1">Go to profile</Link>
            </section>
        )
    }
}

export default Post;