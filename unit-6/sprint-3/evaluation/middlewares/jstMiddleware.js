// const Redis = require('ioredis');

const jwt = require('jsonwebtoken');
const config=require('../config/config');

// const redis = new Redis({
//     port: 13881,
//     host: 'redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com',
//     password: 'iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu'
// });

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, "masai");
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

