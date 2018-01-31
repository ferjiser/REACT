import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';
import api from '../../api.js';

import styles from './Page.css'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            posts: [],
            loading: true
        };
    }

    async componentDidMount() {
        console.log('props Profile', this.props);
        const [user,
            posts] = await Promise.all([
            api
                .users
                .getSingle(this.props.match.params.id),
            api
                .users
                .getPosts(this.props.match.params.id)
        ]);

        this.setState({user, posts, loading: false});
        console.log('state Profile', this.state);
    }

    render() {
        if (this.state.loading) {
            return <Loading/>
        }
        return (
            <section name="profile" className={styles.main}>
                <h2>Profile of {this.state.user.name}</h2>
                {this.state.user.email
                    ? <fieldset className={styles.field}>
                            <legend>Basic info</legend>
                            <input type="email" value={this.state.user.email} disabled/>
                        </fieldset>
                    : null}
                {this.state.user.address
                    ? <fieldset className={styles.field}>
                            <legend>Address</legend>
                            <address>
                                {this.state.user.address.street}<br/> {this.state.user.address.suite}<br/> {this.state.user.address.city}<br/> {this.state.user.address.zipcode}<br/>
                            </address>
                        </fieldset>
                    : null}
                <section className={styles.list}>
                    {this
                        .state
                        .posts
                        .map(post => <Post key={post.id} {...post} user={this.state.user}/>)}
                </section>
            </section>
        )
    }
}

export default Profile;