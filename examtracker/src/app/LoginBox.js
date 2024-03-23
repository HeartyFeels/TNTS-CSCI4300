import Row from "./Row";
import Button from "./Button";

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
            <h1>Log In</h1>
            
            <Row item={username} />

            <Row item={password} />

            <Button item={loginButton} />
        </div>
    );
}

export default LoginBox;