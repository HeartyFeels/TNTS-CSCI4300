"use client"

import "./NavBar.css"
import Link from "next/link";
import { useState } from "react";


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
                <Link href="/login">Logout</Link>
            </li>
        </>
    )
}

export default function Navbar(props) {
    return (
        <nav className="nav">
            <a href="/" className="site-title">KnowFlow</a>
            <ul>
                {props.isActive ? <NavBarAfterLogin /> :  <NavBarBeforeLogin />}
            </ul>
        </nav>
    )
}