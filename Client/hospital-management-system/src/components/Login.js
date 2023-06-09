// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export const Login = ({ setIsLoggedIn }) => {

//   const [username, usernameupdate] = useState("");
//   const [password, passwordupdate] = useState("");

//   const usenavigate = useNavigate();

//   useEffect(() => {
//     sessionStorage.clear();
//   }, []);

//   const ProceedLogin = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8000/user/" + username).then((res) => {
//       return res.json();
//     }).then((resp) => {
//       console.log(resp);

//       if (Object.keys(resp).length === 0) {
//         toast.error("Please enter valid username");
//       }
//       else {
//         const isLoggedIn = true; // Replace with your login logic
//         if (resp.password === password) {
//           toast.success('Success!');
//           sessionStorage.setItem('username', username);
//           setIsLoggedIn(true);
//           usenavigate('/');
//         } else {
//           toast.error("Please enter valid credentials");
//         }

//       }
//     }).catch((err) => {
//       toast.error("Login Failed: " + err.message);
//     })
//   }

//   return (

//     <div className="container">
//       <div className="row d-flex justify-content-center align-items-center" id="log">
//         <form className="col-12 d-flex flex-column justify-content-center align-items-center login" onSubmit={ProceedLogin}>

//           <h2>🖐</h2>
//           <h3 className="text-center login-title">Welcome Back!</h3>
//           <input value={username} onChange={e => usernameupdate(e.target.value)} type="text" className="form-control" placeholder="Username*" />
//           <input value={password} onChange={e => passwordupdate(e.target.value)} type="password" className="form-control" placeholder="Password*" />
//           <button type="submit" className="btn btn-login">Login</button>

//           <span className="footer-copyright-login">&copy; 2023</span>
//         </form>
//       </div>
//     </div>

//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:36468/api/Users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Username: username,
        Password: password
      })
    })
      .then(resp => resp.json())
      .then((result) => {
        if (result === 'Valid user') {
          toast.success('Success!');
          sessionStorage.setItem('username', username);
          // sessionStorage.setItem('role', 'doctor');

          if (username === 'admin') {
            sessionStorage.setItem('role', 'admin');
          } else if (username === 'doc') {
            sessionStorage.setItem('role', 'doctor');
          } else if (username === 'patient') {
            sessionStorage.setItem('role', 'patient');
          }

          setIsLoggedIn(true);
          navigate('/');
        } else {
          toast.error('Please enter valid credentials');
        }
      })
      .catch((err) => {
        toast.error('Login Failed: ' + err.message);
      });
  };



  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center" id="log">
        <form className="col-12 d-flex flex-column justify-content-center align-items-center login" onSubmit={proceedLogin}>
          <h2>🖐</h2>
          <h3 className="text-center login-title">Welcome Back!</h3>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Username*"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Password*"
          />
          <button type="submit" className="btn btn-login">Login</button>
          <span className="footer-copyright-login">
            &copy; 2023
          </span>
        </form>
      </div>
    </div>
  );
};
