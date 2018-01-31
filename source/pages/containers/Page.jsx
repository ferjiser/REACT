import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home.jsx';
import Post from './Post.jsx';
import Profile from './Profile.jsx';
import Gallery from './Gallery.jsx';
import Error404 from './Error404.jsx';
import Header from '../../shared/components/Header.jsx';

function Pages() {
    return (
        <main role="application">
            <Header/>
            <Switch>

                <Route path="/" exact component={Home}/>{/* Lista de artículos */}
                <Route path="/post/:id" exact component={Post}/> {/* Detalle de artículo */}
                <Route path="/user/:id" exact component={Profile}/> {/* Perfil de usuario */}
                <Route path="/gallery" exact component={Gallery}/> {/* Galería de fotos */}
                <Route component={Error404}/>{/* Error 404 */}
            </Switch>
        </main>
    )

}

export default Pages;