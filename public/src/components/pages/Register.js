import React, {SyntheticEvent, useState} from "react";
import {Redirect} from "react-router-dom";
import "../pages/style.css";
import "../../grid.css";

const Register = () => {
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:10001/api/v1/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                dob
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login" />
    }

    return (
        <div className="wraper">
            <div className="container">
                <div className="header-reg">
                    <div className="reg-row">
                        <h1 className="reg-title">Create Account</h1>
                        <div className="line-header"></div>
                    </div>
                </div>
                <div className="col span-1-of-3">
                <div className="page-info">
                    
                        <h2><span className="orange">Create your</span><span className="grey"><br />Account</span></h2>
                        <p className="reg-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi, quia
                        eaque,
                        dolore ipsum
                        omnis esse fugiat distinctio id aspernatur numquam nam exercitationem minima maiores. Provident
                        accusamus impedit quos a erit, placeat perferendis, nesciunt consectetur
                        ducimus eligendi facilis id quo voluptatibus sunt, harum odio adipisci ipsa totam!
                        </p>
                    
                </div>
            </div>

        <form className="reg-form" onSubmit={submit}>

        <div className="col span-1-of-3">

            <label>First Name</label>
            <input className="form-control" 
            placeholder="First Name" 
            required 
            onChange={e => setFirstname(e.target.value)}
            />
            
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
    
        </div>

            
        <div className="col span-1-of-3">

            <label>Last Name</label>
            <input className="form-control" 
            placeholder="Last Name" 
            required 
            onChange={e => setLastname(e.target.value)}
            />

            <label>Birthday</label>
            <input className="form-control"
            type={Date} 
            placeholder="Date of Birth" 
            required 
            onChange={e => setDob(e.target.value)}
            />
            
            <label>Repeat Password</label>
            <input className="form-control"
            type="password" 
            placeholder="Repeat Password" 
            required 
            onChange={e => setPassword(e.target.value)}
            />
            
        </div>
            

            <button className="btn-reg" type="submit">Create Account</button>


        </form>


        </div>
        </div>
    );
};

export default Register;
