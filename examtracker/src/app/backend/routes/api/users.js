const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');