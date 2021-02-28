import axios from "axios";

const API_URL = "http://localhost:10001/api/v1/auth/";

const register = (first_name, last_name, email, password, dob) => {
    return axios.post(API_URL, {
        first_name,
        last_name,
        email,
        password,
        dob
    });
};


const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};


export default {
    register,
    login,
    logout
};