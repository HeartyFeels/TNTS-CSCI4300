import Row from "./Row";
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";

let username = {
    name: "Username: ",
    type: "text"
}

let password = {
    name: "Password: ",
    type: "password"
}

let loginButton = {
    label: "Log In",
    action: {}
}

const LoginBox = () => {
    return (
        <div>
            <Card>
                <h1>Log In</h1>
                
                <Row item={username} />

                <Row item={password} />

                <Link href="/schedule"><Button>Login</Button></Link>
                <p>Don't have an account yet? Sign up <Link href="/signup">here</Link> </p>
            </Card>
        </div>
    );
}

export default LoginBox;