import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import PostBody from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';
import Comment from '../../comments/components/Comment.jsx';

import api from '../../api.js';

import styles from './Page.css'

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            post: {},
            loading: true,
            comments: []
        };
    }

    async componentDidMount() {
        console.log('props Post', this.props);
        const [post,
            comments] = await Promise.all([
            api
                .posts
                .getSingle(this.props.match.params.id),
            api
                .posts
                .getComments(this.props.match.params.id)
        ]);

        const user = await api
            .users
            .getSingle(post.userId);

        this.setState({user, post, comments, loading: false});
        console.log('state Post', this.state);
    }

    render() {
        if (this.state.loading) {
            return <Loading/>
        }
        return (
            <section name="post" className={styles.main}>
                <PostBody
                    {...this.state.post}
                    user={this.state.user}
                    comments={this.state.comments}/>
                <br/>
                <section className={styles.list}>
                    {this
                        .state
                        .comments
                        .map(comment => (<Comment key={comment.id} {...comment }/>))}
                </section>
            </section>
        )
    }
}

export default Post;