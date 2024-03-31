const User = require('../models/user');
const bcrypt = require('bcryptjs');
const config=require('../config/config');
const jwt = require('jsonwebtoken');


exports.register = async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    return await user.save();
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid password');
    
    return jwt.sign({ userId: user._id }, "masai", { expiresIn: '1h' });
};