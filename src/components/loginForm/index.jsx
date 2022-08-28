import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./loginForm.css";



const LoginForm = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };


    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem('token', response.token);
                navigate("/");
            });
        }
    };


    return (
        <form className="form-box">
            <div>
                <h2>Login Here!</h2>
            </div>
            <div className="username-object">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    className="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div className="password-object">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    className="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
                Login
            </button>
            <div className="sign up">
                If you don't have an account <span className="sign.up-here"
                >Sign up here.</span>
            </div>
        </form>
    );
}
export default LoginForm;