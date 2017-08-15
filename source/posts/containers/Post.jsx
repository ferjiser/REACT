import React, {Component} from 'react';
import PropTypes from 'prop-types';

import api from '../../api.js';
import {Link} from 'react-router-dom';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: props.user || null,
            comments: []
        };
    }

    async componentDidMount() {
        console.log('props Post', this.props);
        const [user,
            comments] = await Promise.all([
            !this.state.user
                ? api
                    .users
                    .getSingle(this.props.userId)
                : Promise.resolve(null),
            api
                .posts
                .getComments(this.props.id)

        ])
        this.setState({
            loading: false,
            user: user || this.state.user,
            comments
        });
        console.log('state Post', this.state);
    }

    render() {
        let numCommentString = ` Hay ${this.state.comments.length} comentarios`;
        return (
            <article id={`post-${this.props.id}`}>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
                {!this.state.loading
                    ? <div>
                            <Link to={`/user/${this.state.user.id}`}>{this.state.user.name}</Link>
                            <span>{numCommentString}</span>
                        </div>
                    : null}
            </article>
        )
    }
}

Post.propTypes = {
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
};

export default Post;