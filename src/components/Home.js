import React from 'react';
import Nav from './Nav'

export default class Home extends React.Component {


    render() {
        return (
            <div>
                <Nav />
                <h1>Hola</h1>
                <h2>Bienvenidos y bienvenidas</h2>
                <h3>A la página más tierna del mundo</h3>
                <h4>Hacé click en los enlaces de la navbar para ver los animalitos</h4>
            </div>
        );
    }
}