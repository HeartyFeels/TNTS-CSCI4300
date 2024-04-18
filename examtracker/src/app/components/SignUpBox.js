import "./Row.css"
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";

// const User = require('../../models/User');
// userRouter.post('/signup', async (req, res) => {
//     try {
//         const {firstName, lastName, username, password} = req.body;
//     }
// })






const SignUpBox = (props) => {
    return (
        <div>
            <Card>
                <h1>Sign Up</h1>
                <div className="row">
                    <label>First Name: </label>
                    <input 
                    required type="text"
                    />
                </div>

                <div className="row">
                    <label>Last Name: </label>
                    <input 
                    required type="text" 
                    />
                </div>

                <div className="row">
                    <label>Username: </label>
                    <input 
                    required type="text"
                    />
                </div>

                <div className="row">
                    <label>Password: </label>
                    <input 
                    required type="password"
                    />
                </div>

                <Link href="/schedule" onClick= {props.setActive} ><Button>Sign Up</Button></Link>
                <p id="option">Already have an account? Log in <Link href="/login">here</Link> </p>
            </Card>
        </div>
    );
}

export default SignUpBox;