import Row from "./Row";
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";

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

const SignUpBox = (props) => {
    return (
        <div>
            <Card>
                <h1>Sign Up</h1>
                <Row item={firstName} />

                <Row item={lastName} />

                <Row item={username} />

                <Row item={password} />

                <Link href="/schedule" onClick= {props.setActive} ><Button>Sign Up</Button></Link>
                <p id="option">Already have an account? Log in <Link href="/login">here</Link> </p>
            </Card>
        </div>
    );
}

export default SignUpBox;