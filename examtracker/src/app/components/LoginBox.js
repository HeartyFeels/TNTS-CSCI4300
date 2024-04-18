"use client"

import Button from "./Button";
import Card from "./Card";
import Link from "next/link";
import "./Row.css"

const LoginBox = () => {
    return (
        <div>
            <Card>
                <h1>Log In</h1>
                

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
            
    );
}

export default LoginBox;