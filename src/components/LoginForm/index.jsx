import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./style.css";


function LoginForm() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = event => {
        const { id, value } = event.target;
        setCredentials({ ...credentials, [id]: value });
    };


    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
        );
        console.log(response.status)
        return response.json();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postData()
                .then((data) => {
                    console.log(data)
                    if (data.token) {
                        window.localStorage.setItem('token', data.token);
                        console.log(data.status)
                        localStorage.setItem('username', credentials.username);
                        console.log('logged in', localStorage.getItem('username'));
                        navigate("/");
                    }
                    else {
                        alert("Username or Password is incorrect. Please try again.")
                        console.log("log-in failed")
                    }
                })
                .catch(err => {

                    console.log(err);
                })
        }
    };


    return (
        <form className="form-box">
            <div>
                <h2>Please log in</h2>
            </div>
            <div>
                <label htmlFor="username"></label>
                <input
                    type="text"
                    id="username"
                    className="username"
                    placeholder="Enter username"
                    onChange={handleChange}

                />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input
                    type="password"
                    id="password"
                    className="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
                Log in
            </button>
        </form>
    );
}
export default LoginForm;