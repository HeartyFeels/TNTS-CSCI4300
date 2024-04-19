const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//signup route
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

//login route

userRouter.post("/login", async (req, res) => {
    try {
        const{username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({msg: "Please enter all of the fields."});
        } //if
        const user = await User.findOne({username})
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({msg: "Incorrect password."});
        }//if
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({token, user: {id: user._id, username: user.username}});
    } catch (err) {
        res.status(500).json({error: err.message});
    } //catch
})

userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorizatiom");
        if (!token) return res.json(false);
        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({error: err.message});
    } //catch
});
module.exports = userRouter;