import React from 'react';
import Nav from './Nav'

export default class Perros extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>¡Hola somos muchos perritos!</h1>
                <img src="https://biotechmagazineandnews.com/wp-content/uploads/2019/10/perros.jpg
" alt="Imagen perritos"></img>
            </div>
        );
    }
}