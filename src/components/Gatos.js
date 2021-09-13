import React from 'react';
import Nav from './Nav'

export default class Gatos extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <h1>¡Hola somos muchos gatitos!</h1>
                <img src="https://cnnespanol.cnn.com/wp-content/uploads/2019/09/02.jpg?quality=100&strip=info
" alt="Imagen gatitos"></img>
            </div>
        );
    }
}