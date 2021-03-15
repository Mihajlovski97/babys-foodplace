import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import "../pages/style.css";
import "../../grid.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    

    const submit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:10001/api/v1/auth/login', {
            email, 
            password
        })
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
        });

        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="profile" />
    }

    return (
        <div className="wraper">
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
            





        <form onSubmit={submit}>
        <div className="login-form">
        <div className="col span-1-of-2">

            <label>Email</label>
            <input className="form-control"
            type="email" 
            placeholder="Email" 
            required 
            onChange={e => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input className="form-control"
            type="password"
            placeholder="Password" 
            required 
            onChange={e => setPassword(e.target.value)}
            />

            <br />

            <button className="btn-lgn" type="submit">Login</button>
            </div>
            </div>
        </form>
        

        </div>
        </div>
    )
}

export default Login;
