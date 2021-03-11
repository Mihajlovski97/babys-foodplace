// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import UserContext from "../userContext";
// import Axios from "axios";



// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState();
    

//     const { setUserData } = useContext(UserContext);
//     const history = useHistory();

//     const submit = async (e) => {
//         e.preventDefault();
//         try {
//           const loginUser = { email, password };
//           const loginRes = await Axios.post(
//             "http://localhost:10001/api/v1/auth/login",
//             loginUser
//           );
//           setUserData({
//             token: loginRes.data.token,
//             user: loginRes.data.user,
//           });
//           localStorage.setItem("auth-token", loginRes.data.token);
//           history.push("/");
//         } catch (err) {
//           err.response.data.msg && setError(err.response.data.msg);
//         }
//       };

    
//     return (

       

//         <form onSubmit={submit}>
//             <h1>Please Login In</h1>
//             <input 
//             type="email"
//             className="form-control"
//             placeholder="Email adress"
//             required
//             onChange={e => setEmail(e.target.value)}
//             />

//             <input 
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             required
//             onChange={e => setPassword(e.target.value)}
//             />

//             <button type="submit">Login In</button>
//         </form>
//     )
// }

// export default Login;