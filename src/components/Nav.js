import React from 'react';
import { Link } from 'react-router-3';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Casita</Link></li>
                        <li><Link to='/gatos'>A ver los gatitos</Link></li>
                        <li><Link to='/perros'>A ver los perritos</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}