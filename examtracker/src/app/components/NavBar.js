"use client"

import "./NavBar.css"
import Link from "next/link";
import { useState } from "react";
import UserContext from "./context/UserContext";

import { useRouter } from "next/router";
import Button from "./Button";

function NavBarBeforeLogin () {
    return (
        <>
            <li>
                <Link href="/signup">Signup</Link>
            </li>
            
            <li>
                <Link href="/login">Login</Link>
            </li>
        </>
    )
}


function NavBarAfterLogin() {
    return (
        <>
            <li>
                <Link href="/schedule">Schedule</Link>
            </li>

            <li>
                <Link href="/">Logout</Link>
            </li>
        </>
    )
}
export default function Navbar(props) {
    //const {userData, setUserData} = ;
    // const router = useRouter();

    // const handleLogout = () => {
    //     setUserData({token: undefined, user: undefined});
    //     localStorage.removeItem('auth-token');
    //     router.push('/login');
    // }
    return (
        <nav className="nav">
            <a href="/" className="site-title">KnowFlow</a>
            <ul>
                {props.isActive ? <NavBarAfterLogin /> :  <NavBarBeforeLogin />}
            </ul>
            {/* <Link href="/">
                <a className="site-title">KnowFlow</a>
            </Link>
            <div>
                {userData.token ? (
                    <Button onClick={handleLogout}>Logout</Button>
                ) : (
                    <Link href="/login">
                        <a className="site-title">Login</a>
                    </Link>
                )};
            </div> */}
        </nav>
    )
}
