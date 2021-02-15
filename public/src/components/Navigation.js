import React from 'react';
import  {Link} from 'react-router-dom';
import logo from '../babys-assets/logo_color.svg';
import '../style/style.css';

export class Navigation extends React.Component {
    render() {
        return(
            <div id="navigation">
                <ul class="nav-links">
                    <li><Link to="/"><img src={logo} className="logo" alt="logo" /></Link></li>
                    <li><Link to="/Breakfast">Breakfast</Link></li>
                    <li><Link to="/Brunch">Brunch</Link></li>
                    <li><Link to="/Lunch">Lunch</Link></li>
                    <li><Link to="/Dinner">Dinner</Link></li>
                    <li><button>Login</button></li>
                    or
                    <li><button>Singup</button></li>
                </ul>
            </div>
        )
    };
};