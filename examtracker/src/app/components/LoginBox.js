"use client"
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";
import "./Row.css"
import axios from 'axios';
import UserContext from "./context/UserContext";
import { useRouter } from "next/navigation";
import {useState, useContext, useEffect} from "react";

const LoginBox = () => {
    const router = useRouter();
    //Issue with this line of code below
    ({ userData, setUserData } = useContext(UserContext));
    //
    useEffect(() => {
        if (userData.token) {
            router.push('/');
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState({
        username: " ",
        password: " ",
    });

    
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/login', formData);
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem('auth-token', response.data.token);
            router.push('/');
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    return (
        <div>
            <Card>
                <h1>Log In</h1>
                <form onSubmit={handleLogin}>
                    <div className="row">
                        <label>Username: </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="row">
                        <label>Password: </label>
                        <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
                <p>Don't have an account yet? Sign up <Link href="/signup">here</Link> </p>
            </Card>
        </div>
    );
}

export default LoginBox;