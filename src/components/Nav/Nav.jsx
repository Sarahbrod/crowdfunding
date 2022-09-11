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
        setLoggedIn(false)
    }

    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [location]
    )


    return (
        <nav className="nav-bar">
            <div className="left-menu">
                <Link to="/" className="site-title">FUNDLEY</Link>
            </div>
            <div img className={isMobile ? "right-menu-mobile" : "right-menu"}
                onClick={() => setIsMobile(false)}>
                <Link className="button" to="/Create">Create</Link>
                {loggedIn ? (
                    <Link className="button" to="/" onClick={logOut}>Logout</Link>)
                    : (<Link className="button" to="/login">Log in</Link>)}
                {loggedIn ? (
                    <Link className="button" to="/Account">Account</Link>)
                    : (<Link className="button" to="/Signup">Sign up</Link>)}
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