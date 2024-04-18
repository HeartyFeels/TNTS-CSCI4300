import "./Row.css"
import Button from "./Button";
import Card from "./Card";
import Link from "next/link";

const User = require('../../models/User');


const submitHandlerSignIn = (event) => {
    event.preventDefault();
        userRouter.post('/signup', async (req, res) => {
        try {
            const {firstName, lastName, username, password} = req.body;
            if (!firstName || !lastName || !username || !password) {
                return res.status(400).json({msg: "Please enter all of the fields."});
            }
            if (password.length < 6) {
                return res
                    .status(400)
                    .json({msg: "Password should be at least 6 characters"});
            }
            const hashedPassword = await bcryptjs.hash(password, 8);
            const newUser = new User({firstName, lastName, username, password: hashedPassword});
            const savedUser = await newUser.save();
            
            res.json(savedUser);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    });
};




const SignUpBox = (props) => {
    return (
        <div>
            <Card>
                <h1>Sign Up</h1>
                <form onSubmit={submitHandlerSignIn}>
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

                    <Link href="/schedule"><Button type="submit">Sign Up</Button></Link>
                </form>
            <p id="option">Already have an account? Log in <Link href="/login">here</Link> </p>
            </Card>
        </div>
    );
}

export default SignUpBox;