const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");

const User = require("../models/User");
const { SECRET } = require("../config");
exports.register = async (userData) => {

    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords do not match");
    }

    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error("Email is already taken");
    }
    
    const createdUser = await User.create(userData);
    const token = await generateToken(createdUser);

    return token;
}

exports.login = async ({ email, password }) => {
    // Get user from db
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error("Invalid email or password");
    }

    // Generate token
       const token = await generateToken(user);

    // return the token
    return token;
}

function generateToken (user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
       }

    return jwt.sign(payload, SECRET, { expiresIn: "2h" });
}