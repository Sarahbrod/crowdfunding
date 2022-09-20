import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function AccountPage() {
    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
            .then(data => {
                if (username === data.username) {
                    setUserData(data);
                }
            })
            .catch(err => { console.log(err) })
    }, [username])

    return (
        <div className="profile">
            <h1 id="user-title">Welcome, {userData.username}</h1>

        </div>
    )
}



export default AccountPage;