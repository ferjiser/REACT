import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import api from '../../api.js';
import Post from '../../posts/containers/Post.jsx';
import Loading from '../../shared/components/Loading.jsx';

import styles from './Page.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            posts: [],
            loading: true
        };

        this.handleScroll = this
            .handleScroll
            .bind(this);
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

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if (this.state.loading) {
            return null;
        }
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.clientHeight;

        if (!(scrolled + viewportHeight >= fullHeight)) {
            return null;
        }

        this.setState({
            loading: true
        }, async() => {
            try {
                const posts = await api
                    .posts
                    .getList(this.state.page);
                this.setState({
                    posts: this
                        .state
                        .posts
                        .concat(posts),
                    page: this.state.page + 1,
                    loading: false
                })
                console.log('scrolled new state Home', this.state);
            } catch (error) {
                console.log(error);
                this.setState({loading: false})
            }
        })
    }

    render() {
        return (
            <section name="home" className={styles.section}>
                <section className={styles.list}>
                    {this
                        .state
                        .posts
                        .map(post => <Post key={post.id} {...post}/>)}
                    {this.state.loading
                        ? <Loading/>
                        : null}
                </section>
            </section>
        )
    }
}

export default Home;