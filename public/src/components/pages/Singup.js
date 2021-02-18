import React, { Component } from 'react'
import axios from 'axios'

export class Singup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                dob: ''
            }
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            dob: this.state.dob
        };

        axios.post(`http://localhost:10001/api/v1/auth`, { user})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type={"text"}
                            name={"first_name"}
                            value={this.state.first_name}
                            onChange={this.changeHandler}
                            placeholder="Enter your name" 
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name={"last_name"}
                            value={this.state.last_name}
                            onChange={this.changeHandler}
                            placeholder="Enter your lastname" 
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name={"email"}
                            value={this.state.email}
                            onChange={this.changeHandler}
                            placeholder="Enter your email" 
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="text"
                            name={"password"}
                            value={this.state.password}
                            onChange={this.changeHandler}
                            placeholder="Enter your password" 
                        />
                    </label>
                    <label>
                        Date of Birth
                        <input
                            type="text"
                            name={"dob"}
                            value={this.state.dob}
                            onChange={this.changeHandler}
                            placeholder="Enter your date of birth" 
                        />
                    </label>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default Singup