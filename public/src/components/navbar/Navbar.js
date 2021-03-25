import React from 'react';
import { Link } from 'react-router-dom';
import {getToken, removeUserStorage} from '../../helpers/StorageFunctions';
import ROUTES from '../../constants/routes';
import '../navbar/navbar.css';
import logo from '../../babys-assets/logo_color.svg';

import {authentication, logOut} from '../../redux/ducks/auth';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

export const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const logingOut = () => {
        console.log('1')
        logOut()(dispatch)
    }
    
    return(
        
        <div className='navigation'>
            <Link to={ROUTES.ROOT}><img src={logo} alt='logo' className='logo'></img></Link>
            <div className='navbar'>
                <ul>
                    <li> 
                        <Link to={ROUTES.BREAKFAST} className='link-item'>breakfast</Link>
                    </li>
                    <div class="circle"></div>
                    <li>
                        <Link to={ROUTES.BRUNCH} className='link-item'>brunch</Link>
                    </li>
                    <div class="circle"></div>
                    <li>
                        <Link to={ROUTES.LUNCH} className='link-item'>lunch</Link>
                    </li>
                    <div class="circle"></div>
                    <li>
                        <Link to={ROUTES.DINNER} className='link-item'>dinner</Link>
                    </li>     
                </ul>
                {!getToken() ?
                    <div className='btn-group'>
                        <Link to={ROUTES.LOGIN}>
                            <button className='btn-login'>LOG IN</button>
                        </Link>
                        <p className='spacer'>or</p>
                        <Link to={ROUTES.REGISTER}>
                            <button className='btn-singup'> CREATE ACCOUNT</button>
                        </Link>
                    </div>
                    :
                    <div className='link-group'>
                        
                        <ul className='profileNav'>
                            <li className='toggle-li'><Link className='link-one' to={ROUTES.MY_RECIPES}>my recipes</Link></li>
                            <li className='toggle-li'><Link className='link-two' to={ROUTES.PROFILE}>my profile</Link></li>
                            <li className='toggle-li'><Link className='link-three' to={ROUTES.LOGIN} onClick={logingOut}>log out</Link></li>
                        </ul>
                        
                    </div> 
                    }
                </div>
        </div>
    )
}

