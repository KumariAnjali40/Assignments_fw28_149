// const config=require('../config/config')
// const { Queue, Worker } = require('bullmq');
// const Redis = require('ioredis');
// const redis = new Redis({
//     port: 13881,
//     host: 'redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com',
//     password: 'iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu'
// });

const { redisOptions } = require('../config/config');
const { Queue } = require('bullmq');
const Redis = require('ioredis');

const redis = new Redis(redisOptions);

const orderQueue = new Queue('orderQueue', { connection: redis });

