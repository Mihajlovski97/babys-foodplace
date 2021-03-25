import React, { useState , useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {logIn} from '../../redux/ducks/auth';
// import {getToken, setUserStorage} from '../helpers/storageFunctions';

import '../../babys-assets/baby-style/login.css';
import '../../grid.css';

export const Login = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
        
    });

    const handleLogin = (e) => {
        e.preventDefault()
        logIn(email,password)(dispatch);
    }

    const {email, password} = loginData;

    return(
        <div className='wraper'>
            <div className="container">
            <div className="log-reg">
                    <div className="reg-row">
                        <h1 className="log-title">Log in</h1>
                        
                    </div>
                </div>
            <div className="col span-1-of-2">
                <div className="page-info">
                    <h2><span className="orange">Welcome to </span><span className="grey">Baby's</span></h2>
                    <p className="reg-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi, quia
                        eaque,
                        dolore ipsum
                        omnis esse fugiat distinctio id aspernatur numquam nam exercitationem minima maiores. Provident
                        accusamus impedit quos a erit, placeat perferendis, nesciunt consectetur
                        ducimus eligendi facilis id quo voluptatibus sunt, harum odio adipisci ipsa totam!
                        </p>
                </div> 
            </div>
             
            <div className='login-form'>
            

                <form className='log-in' onSubmit={handleLogin}>

                <div className="col span-1-of-2">

                <label className='label'>Email</label><br/>
                <input 
                type="email" 
                id='email' 
                className='form-control' 
                placeholder='user@domain.com' 
                value={email} 
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}>
                </input>
                <br/>

                <label className='label'>Password</label><br/>
                <input 
                type="password" 
                id='password' 
                className='form-control' 
                placeholder='******' 
                value={password} 
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}>
                </input>  
                <br/>

                <button className="btn-lgn" type="submit">Login</button>
                
                {/* <input type="submit" value="Log In" className='submit-login'/> */}

                </div>
                
                </form>
             </div>
             </div>
        </div>
    )
}

export default Login;