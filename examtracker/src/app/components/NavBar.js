"use client"

import "./NavBar.css"
import Link from "next/link";
import { useContext, useState } from "react";
import UserContext from "../backend/context/UserContext";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
    const { userData, setUserData } = useContext(UserContext);
    const router = useRouter();

    const handleLogout = async (e) => {
        e.preventDefault();
        setUserData({token: undefined, user: undefined});
        localStorage.removeItem('auth-token');
        router.push('/');
    };
    
    return (
        <nav className="nav">
            <ul>
                    {userData.token ? (
                        <div>
                            <li>
                                <a href="/schedule" className="site-title">KnowFlow</a>
                            </li>
                            <div className="loggedIn">
                                <li>
                                    <Link className= "loggedIn-nav" href="/schedule">Your Schedule</Link>
                                </li>
                                <li>
                                    <Link className="loggedIn-nav" href="/addexam">Add an Exam</Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <Button className="logout" onClick={handleLogout}>Logout</Button>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <li>
                                <a href="/" className="site-title">KnowFlow</a>
                            </li>
                            <div className="loggedOut">
                                <li>
                                    <Link className="loggedOut-nav" href="/signup">Signup</Link>
                                </li>
                                <li>
                                    <Link className="loggedOut-nav" href="/login">Login</Link>
                                </li>
                            </div>
                        </div>
                    )}
                </ul>
        </nav>
    )
}
