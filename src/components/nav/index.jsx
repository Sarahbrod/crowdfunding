import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="site-title">FUNDLEY</Link>
            <ul>
                <li>
                    <Link to="/Create">Create</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
                <li>
                    <Link to="/SignUp">Sign up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav