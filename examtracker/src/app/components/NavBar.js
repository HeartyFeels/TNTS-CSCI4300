"use client"

import "./NavBar.css"
import Link from "next/link";
import { useState } from "react";
import UserContext from "./context/UserContext";

import { useRouter } from "next/router";
import Button from "./Button";

export default function Navbar() {
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
                <li>
                    <Link href="/signup">Signup</Link>
                </li>
                
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}
