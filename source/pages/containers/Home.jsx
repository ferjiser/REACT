import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import api from '../../api.js';
import Post from '../../posts/containers/Post.jsx';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            posts: [],
            loading: true
        }
    }

    async componentDidMount() {
        console.log('props Home', this.props);
        const posts = await api
            .posts
            .getList(this.state.page);

        this.setState({
            posts,
            page: this.state.page + 1,
            loading: false
        })
        console.log('state Home', this.state);
    }

    render() {
        return (
            <section name="home">
                <h1>Home</h1>
                <section>
                    {this.state.loading
                        ? <h2>Loading posts...</h2>
                        : null}
                    {this
                        .state
                        .posts
                        .map(post => <Post key={post.id} {...post}/>)}
                </section>
                <Link to="/post/1">Go to post</Link>
            </section>
        )
    }
}

export default Home;