import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function AccountPage() {
    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
        if (window.localStorage.getItem('token')) {
            return (

                <div>
                    <h1 id="user-title">Welcome, {userData.username}</h1>

                    <div>
                        <Link className="button" to="/grants">View More Scholarships</Link>
                    </div>

                </div>
            )
        }
    }
    )
}


export default AccountPage;