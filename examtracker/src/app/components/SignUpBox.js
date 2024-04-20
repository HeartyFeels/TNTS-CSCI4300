'use client'
import "./Row.css"
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";
import {useState, useContext} from 'react';
import axios from "axios";
import UserContext from "./context/UserContext";

const SignUpBox = () => {
    const setUserData = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8082/api/users/signup', formData);
            const loginRes = await axios.post('http://localhost:8082/api/users/login', {
                username: formData.username,
                password: formData.password
            });

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            localStorage.setItem('auth-token', loginRes.data.token);

            router.push('/schedule');
        } catch (error) {
            console.error('Signup failed:', error);
        } //catch
    };

    return (
        
        <div>
            <Card>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label>First Name: </label>
                        <input 
                        required type="text"
                        onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label>Last Name: </label>
                        <input 
                        required type="text" 
                        onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label>Username: </label>
                        <input 
                        required type="text"
                        onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label>Password: </label>
                        <input 
                        required type="password"
                        onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
                </form>
            <p id="option">Already have an account? Log in <Link href="/login">here</Link> </p>
            
            </Card>
        </div>
       
    );
}

export default SignUpBox;