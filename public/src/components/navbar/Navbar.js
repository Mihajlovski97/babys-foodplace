import React from 'react';
import  {Link} from 'react-router-dom';
import logo from '../../babys-assets/logo_color.svg';
import "../navbar/navbar.css";


export const Nav = () => {
    return(
        <div className="header">
            <ul className="nav">
                <li className="nav-list-item">
                    <Link to={"/"} className="link-item"><img src={logo} className="logo" alt="logo" /></Link>
                </li>
                <li className="nav-list-item-cat">
                    <Link to={"/breakfast"} className="link-item">Breakfast</Link>
                </li>
                <li className="nav-list-item-cat">
                    <Link to={"/brunch"} className="link-item">Brunch</Link>
                </li>
                <li className="nav-list-item-cat">
                    <Link to={"/lunch"} className="link-item">Lunch</Link>
                </li>
                <li className="nav-list-item-cat">
                    <Link to={"/dinner"} className="link-item">Dinner</Link>
                </li>
                <div className="first-nav">
                    <ul>
                        <li className="nav-list-item">
                            <Link to={"/login"} className="link-item">
                                <button className="btn-login">Log in</button>
                            </Link>
                            OR
                            <Link to={"/sing-up"} className="link-item">
                                <button className="btn-singup">Create Account</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    );
};

export default Nav

