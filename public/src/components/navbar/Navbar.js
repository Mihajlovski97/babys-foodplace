import React from 'react';
import  {Link} from 'react-router-dom';
import logo from '../../babys-assets/logo_color.svg';
import "../navbar/navbar.css";


export const Nav = () => {
    return(
        <nav className="navigation">
            <div className="wrapper">                
                <Link to={"/"} className=""><img src={logo} className="logo" alt="logo" /></Link>                
                <div className="navbar" id="colapse">
                    <ul>
                        <li>
                            <Link to="/breakfast" className="link-item">breakfast</Link>
                        </li>
                        <div class="circle"></div>
                        <li>
                            <Link to="/brunch" className="link-item">brunch</Link>
                        </li>
                        <div class="circle"></div>
                        <li>
                            <Link to="/lunch" className="link-item">lunch</Link>
                        </li>
                        <div class="circle"></div>
                        <li>
                            <Link to="/dinner" className="link-item">dinner</Link>
                        </li>
                    </ul>
                    <div className="btn-group">
                            <Link to={"/login"}>
                                <button className="btn-login">Log in</button>
                            </Link>
                            <p className="spacer">or</p>
                            <Link to={"/sing-up"}>
                                <button className="btn-singup">Create Account</button>
                            </Link>
                    </div>
                </div>
            </div>
        </nav>        
    );
};

export default Nav

