import Row from "./Row";
import Button from "./Button";

let firstName =  {
    name: "First Name: ",
    type: "text"
}

let lastName =  {
    name: "Last Name: ",
    type: "text"
}

let username =  {
    name: "Username: ",
    type: "text"
}

let password =  {
    name: "Password: ",
    type: "password"
}

let signUpButton = {
    label: "Create an Account",
    action: {}
}

const SignUpBox = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Row item={firstName} />

            <Row item={lastName} />

            <Row item={username} />

            <Row item={password} />

            <Button item={signUpButton} />
        </div>
    );
}

export default SignUpBox;