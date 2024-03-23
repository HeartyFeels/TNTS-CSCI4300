const SignUpBox = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <label>First Name: </label>
            <div class="grid">
                <input required type="text" />
                <br />
                <label>Last Name: </label>
                <input required type="text" />
                <br />
                <label>Username: </label>
                <input required type="text" />
                <br />
                <label>Password: </label>
                <input required type="password" />
            </div>
        
            <button> Submit </button>
        </div>
    );
}

export default SignUpBox;