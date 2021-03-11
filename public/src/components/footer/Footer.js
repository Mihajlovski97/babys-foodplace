import React from "react"
import {Link} from "react-router-dom";
import logo from "../../babys-assets/logo_white.svg";
import "../footer/footer.css";

export const Footer = () => {
    return(
        <div className="footer">
        <footer className="wrapper-f">
            <Link to="/" className=""><img src={logo} className="footer-logo" /></Link>
            <div className="footer-items">
                <ul>
                    <li>
                        <Link to="/breakfast" className="link-item-f">breakfast</Link>
                    </li>
                    <div class="circle-white"></div>
                    <li>
                        <Link to="/brunch" className="link-item-f">brunch</Link>
                    </li>
                    <div class="circle-white"></div>
                    <li>
                        <Link to="/lunch" className="link-item-f">lunch</Link>
                    </li>
                    <div class="circle-white"></div>
                    <li>
                        <Link to="/dinner" className="link-item-f">dinner</Link>
                    </li>
                </ul> 
                <div className="footer-copyright">
                    <p class="white-p">
                        Baby’s Food Place <br />copyright © 2021
                    </p>  
                </div>   
            </div> 
        </footer>
        </div>
    )
};

export default Footer