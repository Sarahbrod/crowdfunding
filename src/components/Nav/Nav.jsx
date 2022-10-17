import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(true);
    const location = useLocation()
    console.log(location);
    const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
    const logOut = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username");
        setLoggedIn(false)
    }

    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [location]
    )

    // const username = window.localStorage.getItem("username")
    // const [userData, setUserData] = useState("");

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
    //         .then(res => res.json())
    //         .then(data => { setUserData(data); console.log(data) })
    // }, [username])


    return (
        <nav className="nav-bar">
            <div className="left-menu">
                <Link to="/" className="site-title">FUNDLEY</Link>
            </div>
            <div img className={isMobile ? "right-menu-mobile" : "right-menu"}
                onClick={() => setIsMobile(false)}>
                <Link className="button" to="/Create">New Project</Link>
                {loggedIn ? (
                    <Link className="button" to="/" onClick={logOut}>Logout</Link>)
                    : (<Link className="button" to="/login">Log In</Link>)}
                {loggedIn ? (
                    <Link className="button" to="/Account">Account</Link>)
                    : (<Link className="button" to="/Signup">Sign Up</Link>)}
            </div>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fa fa-bars"></i>
                )}
            </button>
        </nav>
    );
}


export default Nav;
