"use client"

import Button from "./Button";
import Card from "./Card";
import Link from "next/link";
import "./Row.css"
import { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { set } from "mongoose";

const LOGIN_URL = "/login"

const LoginBox = (props) => {
    const { setAuth } = useContext(AuthContext);
    const userReference = useRef();
    const errorReference = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userReference.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [user, password])


    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, password }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
            );

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, password, roles, accessToken})

            setUser('');
            setPassword('');
        } catch (err) {
            if(!err?.response) {
                setErrorMessage("No server response")
            } else if (err.response?.status === 400) {
                setErrorMessage("Missing username or password")
            } else if (err.response?.status === 401) {
                setErrorMessage("Incorrect credentials")
            } else {
                setErrorMessage("Login Failed")
            }

            errorReference.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <div>
                    <h1>You have logged in!</h1>
                    <Link href="/schedule">View your schedule</Link>
                </div>
            ) : (
                <div>

                    <Card>
                        <h1>Log In</h1>
                        <p ref={errorReference} classname={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>

                        <form onSubmit={submitHandler}>
                            <div className="row">
                                <label>Username: </label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Username"
                                    ref={userReference}
                                    onChange={(event) => setUser(event.target.value)}
                                    value={user}
                                    required
                                />
                            </div>

                            <div className="row">
                                <label>Password: </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                    required
                                />
                            </div>

                            <Button type="submit">Login</Button>
                        </form>
                        <p>Don't have an account yet? Sign up <Link href="/signup">here</Link> </p>
                    </Card>
                </div>
            )}
        </>
    );
}

export default LoginBox;